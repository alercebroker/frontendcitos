export class DetectionsData {
  detections: any[];
  nonDetections: any[];
  bands: (number | string)[];
};

export class PlotData {
  series: any[];
  legend: any[];
  font?: string;
};

export const BAND_MAP: any = {
  1: { name: "g", color: "#56E03A" },
  2: { name: "r", color: "#D42F4B" },
  4: { name: "gg", color: "#56E03A" },
  5: { name: "rr", color: "#D42F4B" },
};

export function detectionsDataFactory(
  detections: any[],
  nonDetections: any[]
): DetectionsData {
  console.log(
    detections,
    nonDetections,
    Array.from(new Set(detections.map((d) => d.fid)))
  );
  return {
    detections,
    nonDetections,
    bands: Array.from(new Set(detections.map((d) => d.fid))),
  };
}

export function dataFilteringFactory(
  filterDetections: (detections: any[]) => any[],
  filterNonDetections: (nonDetections: any[]) => any[]
) {
  return (data: DetectionsData): DetectionsData => ({
    detections: filterDetections(data.detections),
    nonDetections: filterNonDetections(data.nonDetections),
    bands: data.bands,
  });
}

export function parsePlotData(
  plotType: string,
  formatData: (data: DetectionsData, actualBand?: number | string) => any[],
  symbolSize?: number,
  encode?: { x: number; y: number }
) {
  return (data: DetectionsData): any[] => {
    const { detections, bands } = data;
    console.log('parsing', detections);
    return bands.map((band) => ({
      name: BAND_MAP[band].name,
      type: plotType,
      scale: true,
      color: BAND_MAP[band].color,
      symbolSize,
      encode,
      data: formatData(data, band),
    }));
  };
}

export function plotDataCreationFactory(
  //dunno yet
  parseSeries: (data: DetectionsData) => any[],
  parseLegend: (data: DetectionsData) => any[]
) {
  return (data: DetectionsData): PlotData => {
    return {
      series: parseSeries(data),
      legend: parseLegend(data),
    };
  };
}

export function plotOptionsFactory(
  series: any[],
  legendData: any[],
  textColor: string,
  tooltipFormatter: (params: any) => any
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
      min: (x: any) => x.min - 0.1,
      max: (x: any) => x.max + 0.1,
    },
    textStyle: {
      color: textColor,
      fontWeight: "lighter",
    },
    series,
  };
}
