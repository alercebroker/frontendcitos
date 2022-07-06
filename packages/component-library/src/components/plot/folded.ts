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

function getFoldedDatasetDetections(detections: any[]): any[] {
  return detections.filter((x) => x.mag <= 23 && x.e_mag < 1);
}

const validDetections = dataFilteringFactory(
  getValidDetections,
  (nd) => [],
);

const foldedFilteredDetections = dataFilteringFactory(
  getFoldedDatasetDetections,
  (nd) => [],
)

const foldedDetectionsPlot = parsePlotData({
  plotType: "scatter",
  formatData: (data: DetectionsData, band: number) => {
    const { detections, period } = data;
    const folded = detections
      .filter((x) => x.fid === band && x.corrected)
      .map((x) => [
        (x.mjd % period) / period, //phase
        x.mag,
        x.candid,
        x.e_mag,
        x.isdiffpos,
      ]);
    return [
      ...folded,
      ...folded.map((x) => [x[0] + 1, ...x.slice(1)]), //adds one to the first element and returns the remaining unchanged
    ];
  },
  symbol: (band: number) => (band < 100 ? "circle" : "square"),
  symbolSize: (band: number) => (band < 100 ? 6 : 3),
  encode: { x: 0, y: 1 },
});

const foldedErrorPlot = parsePlotData({
  plotType: "custom",
  formatData: (data: DetectionsData, band: number | string) => {
    const { detections, period } = data;
    const error = detections
      .filter((x) => x.fid === band && x.corrected && x.mag && x.mag < 100)
      .map((x) => [
        (x.mjd % period) / period, //phase
        x.mag - x.e_mag,
        x.mag + x.e_mag,
      ]);

    return [...error, ...error.map((x) => [x[0] + 1, x[1], x[2]])];
  },
  renderItem: renderError,
});

function createSeries(data: DetectionsData) {
  return [
    ...foldedDetectionsPlot(data),
    ...foldedErrorPlot(data),
  ]
}

function createLegend(data: DetectionsData) {
  return [
    ...data.bands.map(band => BAND_MAP[band].name),
    ...data.bands.map(band => BAND_MAP[band].name + " detections")
  ]
}

const foldedPlotDataFactory = plotDataCreationFactory(
  createSeries,
  createLegend,
  (data) => `Period: ${data.period} days`,
)

function differencePlotOptionsFactory(plotData: PlotData) {
  return (font: string, tooltipFormatter: (params: any) => any) => {
    const { series, legend, subtitle } = plotData;
    return plotOptionsFactory(
      series,
      legend,
      font,
      tooltipFormatter,
      subtitle
    );
  };
}

export const foldedPlotOptions = pipe(
  detectionsDataFactory,
  validDetections,
  foldedFilteredDetections,
  foldedPlotDataFactory,
  differencePlotOptionsFactory,
);
