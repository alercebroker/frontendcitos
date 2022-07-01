import { BAND_MAP, plotOptionsFactory } from "./options";
import formatTooltip from './formatTooltip';

type PlotDataset = {
  detections: any[];
  bandsEnum: (number | string)[];
};

// Asegurar datos relevantes para el grafico
function getValidDetections(detections: any[]): any[] {
  return detections.filter((x) => x.fid === 1 || x.fid === 2);
}

function getValidateNonDetections(nonDetections: any[]): any[] {
  return nonDetections.filter((x) => x.diffmaglim <= 23);
}

function getApparentDatasetDetections(detections: any[]): PlotDataset {
  const filteredDetections = detections.filter(
    (x) => x.magpsf_corr <= 23 && x.sigmapsf_corr_ext < 1
  );
  return {
    detections: filteredDetections,
    bandsEnum: Array.from(
      new Set(filteredDetections.map((detection) => detection.fid))
    ),
  };
}

function parsePlotData(
  plotType: string,
  format: (elements: any[], band: number | string) => any[],
  symbolSize?: number,
  encode?: { x: number; y: number }
) {
  return (plotInfo: PlotDataset) => {
    const { detections, bandsEnum } = plotInfo;
    return bandsEnum.map((band) => ({
      name: BAND_MAP[band].name,
      type: plotType,
      scale: true,
      color: BAND_MAP[band].color,
      symbolSize,
      encode,
      data: format(detections, band),
    }));
  };
}

const apparentDetectionsPlot = parsePlotData(
  "scatter",
  (elements, band) => {
    return elements
      .filter((x) => x.fid === band && x.corrected)
      .map((x) => [
        x.mjd,
        x.magpsf_corr - x.sigmapsf_corr_ext,
        x.magpsf_corr + x.sigmapsf_corr_ext,
      ]);
  },
  6,
  { x: 0, y: 1 }
);

const apparentErrorPlot = parsePlotData("custom", (elements, band) => {
  return elements
    .filter((x) => x.fid === band && x.corrected)
    .map((x) => [
      x.mjd,
      x.magpsf_corr,
      x.candid,
      x.sigmapsf_corr_ext,
      x.isdiffpos,
    ]);
});

function apparentLegendPlot(bands: any[]) {
  return bands.map((band) => BAND_MAP[band].name);
}

function buildApparentPlotOptions(
  detections: any[],
  font: string
) {
  const validDetections = getValidDetections(detections);
  const apparentDetections = getApparentDatasetDetections(validDetections);
  return plotOptionsFactory(
    [
      ...apparentDetectionsPlot(apparentDetections),
      ...apparentErrorPlot(apparentDetections),
    ],
    apparentLegendPlot(apparentDetections.bandsEnum),
    font,
    formatTooltip,
  );
}

export {
  buildApparentPlotOptions
};
