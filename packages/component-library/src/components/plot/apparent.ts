import { pipe } from "ramda";
import {
  detectionsDataFactory,
  dataFilteringFactory,
  parsePlotData,
  plotDataCreationFactory,
  plotOptionsFactory,
  DetectionsData,
  PlotData,
  BAND_MAP,
} from "./generic";

const apparentDetectionsPlot = parsePlotData(
  "scatter",
  (data: DetectionsData, band: number | string) => {
    const { detections } = data;
    return detections
      .filter((x) => x.fid === band)
      .map((x) => [
        x.mjd,
        x.mag - x.e_mag,
        x.mag + x.e_mag,
      ]);
  },
  6,
  { x: 0, y: 1 }
);

const apparentErrorPlot = parsePlotData(
  "scatter",
  (data: DetectionsData, band: number | string) => {
    const { detections } = data;
    return detections
      .filter((x) => x.fid === band && x.corrected)
      .map((x) => [
        x.mjd,
        x.magpsf_corr,
        x.candid,
        x.sigmapsf_corr_ext,
        x.isdiffpos,
      ]);
  }
);

function getValidDetections(detections: any[]): any[] {
  return detections.filter((x) => x.fid === 1 || x.fid === 2);
}

function getApparentDatasetDetections(detections: any[]): any[] {
  return detections.filter(
    (x) => x.magpsf_corr <= 23 && x.sigmapsf_corr_ext < 1
  );
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
  (data: DetectionsData) => data.bands.map(band => BAND_MAP[band].name),
)

function apparentPlotOptionsFactory(options: PlotData) {
  return (font: string, tooltipFormatter: (params: any) => any) => {
    const { series, legend } = options;
    return plotOptionsFactory(series, legend, font, tooltipFormatter);
  }
}

export const apparentPlotOptions = pipe(
  detectionsDataFactory,
  //apparentFilteredDetections,
  apparentPlotDataFactory,
  apparentPlotOptionsFactory,
);
