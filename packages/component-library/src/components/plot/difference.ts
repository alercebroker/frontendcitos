import { pipe } from "ramda";
import {
  getValidDetections,
  detectionsDataFactory,
  dataFilteringFactory,
  parsePlotData,
  plotDataCreationFactory,
  plotOptionsFactory,
  DetectionsData,
  PlotData,
  BAND_MAP,
} from "./generic";
import { renderError } from "./generic/render";

const validDetections = dataFilteringFactory(
  getValidDetections,
  (nd: any[]) => nd
);

const differenceFilteredDetections = dataFilteringFactory(
  (detections: any[]) => detections.filter((x) => x.mag <= 23),
  (nd: any[]) => nd
);

const differenceDetectionsPlot = parsePlotData({
  plotType: "scatter",
  symbolSize: (b) => 6,
  encode: { x: 0, y: 1 },
  formatData(data, actualBand) {
    return data.detections
      .filter((x) => x.fid === actualBand)
      .map((x) => [x.mjd, x.mag, x.candid, x.e_mag, x.isdiffpos]);
  },
});

const differenceErrorPlot = parsePlotData({
  plotType: "custom",
  formatData(data, actualBand) {
    return data.detections
      .filter((x) => x.fid === actualBand)
      .map((x) => [x.mjd, x.mag - x.e_mag, x.mag + x.e_mag]);
  },
  renderItem: renderError,
});

const differenceNonDetections = parsePlotData({
  plotType: "scatter",
  formatData(data, actualBand) {
    return data.nonDetections
      .filter((x) => x.fid === actualBand && x.diffmaglim > 10)
      .map((x) => [x.mjd, x.diffmaglim]);
  },
  symbolSize: (b) => 6,
  nameSuffix: 'non-detections',
  symbol: (b) =>
    "path://M0,49.017c0-13.824,11.207-25.03,25.03-25.03h438.017c13.824,0,25.029,11.207,25.029,\
      25.03L262.81,455.745c0,0-18.772,18.773-37.545,0C206.494,436.973,0,49.017,0,49.017z",
  alpha: true,
});

function createSeries(data: DetectionsData) {
  const nonDetectionsPlotData = differenceNonDetections(data).filter(x => x.data.length > 0);
  return [
    ...differenceDetectionsPlot(data),
    ...differenceErrorPlot(data),
    ...nonDetectionsPlotData
  ]
}

function createLegend(data: DetectionsData) {
  return [
    ...data.bands.map(band => BAND_MAP[band].name),
    ...data.bands.map(band => BAND_MAP[band].name + " non-detections")
  ]
}

const differencePlotDataFactory = plotDataCreationFactory(
  createSeries,
  createLegend
);

function differencePlotOptionsFactory(plotData: PlotData) {
  return (font: string, tooltipFormatter: (params: any) => any) => {
    const { series, legend } = plotData;
    return plotOptionsFactory(
      series,
      legend,
      font,
      tooltipFormatter,
    );
  };
}

export const differencePlotOptions = pipe(
  detectionsDataFactory,
  validDetections,
  differenceFilteredDetections,
  differencePlotDataFactory,
  differencePlotOptionsFactory
);
