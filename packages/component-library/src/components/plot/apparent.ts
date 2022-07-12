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

const apparentDetectionsPlot = parsePlotData({
  plotType: "scatter",
  formatData: (data: DetectionsData, band: number) => {
    const { detections } = data;
    return detections
      .filter((x) => x.fid === band && x.corrected)
      .map((x) => [
        x.mjd,
        x.mag,
        x.candid || x.objectid,
        x.e_mag,
        x.isdiffpos || x.field,
      ]);
  },
  symbol: (band: number) => (band < 100 ? "circle" : "square"),
  symbolSize: (band: number) => (band < 100 ? 6 : 3),
  encode: { x: 0, y: 1 },
});

const apparentErrorPlot = parsePlotData({
  plotType: "custom",
  formatData: (data: DetectionsData, band: number | string) => {
    const { detections } = data;
    return detections
      .filter((x) => x.fid === band && x.corrected)
      .map((x) => [x.mjd, x.mag - x.e_mag, x.mag + x.e_mag]);
  },
  renderItem: renderError,
});

function getApparentDatasetDetections(detections: any[]): any[] {
  return detections.filter((x) => x.mag <= 23 && x.e_mag < 1);
}

function createSeries(data: DetectionsData): any[] {
  return [...apparentDetectionsPlot(data), ...apparentErrorPlot(data)];
}

const validDetections = dataFilteringFactory(
  getValidDetections,
  (nd: any[]) => []
);

const apparentFilteredDetections = dataFilteringFactory(
  getApparentDatasetDetections,
  (nd: any[]) => []
);

const apparentPlotDataFactory = plotDataCreationFactory(
  createSeries,
  (data: DetectionsData) => data.bands.map((band) => BAND_MAP[band].name)
);

function apparentPlotOptionsFactory(options: PlotData) {
  return (font: string, tooltipFormatter: (params: any) => any) => {
    const { series, legend } = options;
    return plotOptionsFactory(
      series,
      legend,
      font,
      tooltipFormatter,
    );
  };
}

export const apparentPlotOptions = pipe(
  detectionsDataFactory,
  validDetections,
  apparentFilteredDetections,
  apparentPlotDataFactory,
  apparentPlotOptionsFactory
);
