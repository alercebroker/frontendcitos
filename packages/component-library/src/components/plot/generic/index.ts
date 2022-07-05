export class DetectionsData {
  constructor(
    public detections: any[],
    public nonDetections: any[],
    public bands: number[]
  ) {}
}

export class PlotData {
  constructor(
    public series: any[],
    public legend: any[],
    public font?: string
  ) {}
}

export const BAND_MAP: any = {
  1: { name: "g", color: "#56E03A" },
  2: { name: "r", color: "#D42F4B" },
  101: { name: "g DR5", color: "#ADA3A3" },
  102: { name: "r DR5", color: "#377EB8" },
  103: { name: "i DR5", color: "#FF7F00" },
  4: { name: "c", color: "#00FFFF" },
  5: { name: "o", color: "#FFA500" },
};


export function getValidDetections(detections: any[]): any[] {
  return detections.filter((x) => Boolean(BAND_MAP[x.fid]));
}

export function detectionsDataFactory(
  detections: any[],
  nonDetections: any[]
): DetectionsData {
  return new DetectionsData(
    detections,
    nonDetections,
    Array.from(new Set([...detections, ...nonDetections].map((d) => d.fid)))
  );
}

export function dataFilteringFactory(
  filterDetections: (detections: any[]) => any[],
  filterNonDetections: (nonDetections: any[]) => any[]
) {
  return (data: DetectionsData): DetectionsData =>
    new DetectionsData(
      filterDetections(data.detections),
      filterNonDetections(data.nonDetections),
      data.bands
    );
}

export function parsePlotData(args: {
  plotType: string;
  formatData: (data: DetectionsData, actualBand: number) => any[][];
  symbolSize?: (band: number) => number;
  symbol?: (band: number) => string;
  encode?: { x: number; y: number };
  renderItem?: (params: any, api: any) => any;
  nameSuffix?: string;
  alpha?: boolean;
}) {
  const alphaChannel = args.alpha ? '88' : 'FF';
  return (data: DetectionsData): any[] => {
    const { bands } = data;
    const {
      plotType,
      formatData,
      symbol,
      symbolSize,
      encode,
      renderItem,
      nameSuffix,
    } = args;
    return bands.map((band: number) => ({
      name: (BAND_MAP[band].name + ' ' + (nameSuffix ?? '')).trim(),
      type: plotType,
      scale: true,
      color: BAND_MAP[band].color + alphaChannel,
      symbol: symbol ? symbol(band) : undefined,
      symbolSize: symbolSize ? symbolSize(band) : undefined,
      encode,
      data: formatData(data, band),
      renderItem,
    }));
  };
}

export function plotDataCreationFactory(
  parseSeries: (data: DetectionsData) => any[],
  parseLegend: (data: DetectionsData) => any[]
) {
  return (data: DetectionsData): PlotData => {
    return new PlotData(parseSeries(data), parseLegend(data));
  };
}

export function plotOptionsFactory(
  series: any[],
  legendData: any[],
  textColor: string,
  tooltipFormatter: (params: any) => any,
) {
  return {
    grid: {
      left: "7%",
      right: "5%",
    },
    title: {
      text: "Light Curve",
      left: "center",
      textStyle: {
        fontWeight: "lighter",
        color: textColor,
      },
    },
    tooltip: {
      show: true,
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#505765",
        },
      },
      formatter: tooltipFormatter,
    },
    toolbox: {
      show: true,
      showTitle: true,
      feature: {
        dataZoom: {
          show: true,
          title: {
            zoom: "Zoom",
            back: "Back",
          },
          icon: {
            zoom: "M11,4A7,7 0 0,1 18,11C18,12.5 17.5,14 16.61,15.19L17.42,16H18L23,21L21,23L16,18V17.41L15.19,16.6C12.1,18.92 7.71,18.29 5.39,15.2C3.07,12.11 3.7,7.72 6.79,5.4C8,4.5 9.5,4 11,4M10,7V10H7V12H10V15H12V12H15V10H12V7H10M1,1V8L8,1H1Z",
            back: "M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z",
          },
        },
        restore: {
          show: true,
          title: "Restore",
        },
      },
      tooltip: {
        // same as option.tooltip
        // show: true,
        formatter(param: any) {
          return "<div>" + param.title + "</div>"; // user-defined DOM structure
        },
        backgroundColor: "#222",
        textStyle: {
          fontSize: 12,
        },
        extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);", // user-defined CSS styles
      },
    },
    legend: {
      data: legendData, // ["g", "r", "g non-detections", "r non-detections"],
      bottom: 0,
      textStyle: {
        fontWeight: "lighter",
        color: textColor,
      },
    },
    xAxis: {
      name: "Modified Julian Dates",
      nameLocation: "center",
      scale: true,
      type: "value",
      splitLine: {
        show: false,
      },
      nameTextStyle: {
        padding: 7,
      },
    },
    yAxis: {
      name: "Magnitude",
      nameLocation: "start",
      type: "value",
      scale: true,
      splitLine: {
        show: false,
      },
      inverse: true,
      min: (y: any) => y.min - 0.3,
      max: (y: any) => y.max + 0.3,
    },
    textStyle: {
      color: textColor,
      fontWeight: "lighter",
    },
    series,
  };
}
