import { mockDetections, mockNonDetections } from "./__mocks__";
import { apparentPlotOptions } from "../apparent";
import { plotOptionsFactory } from "../generic";

const expectedSeries = [
  {
    name: "g",
    type: "scatter",
    scale: true,
    color: "#56E03AFF",
    symbolSize: 6,
    encode: {
      x: 0,
      y: 1,
    },
    data: [
      [
        59761.43459489988,
        17.644672393798828,
        "2007434592715010000",
        0.08929440379142761,
        -1,
      ],
    ],
  },
  {
    name: "r",
    type: "scatter",
    scale: true,
    color: "#D42F4BFF",
    symbolSize: 6,
    encode: {
      x: 0,
      y: 1,
    },
    data: [
      [
        59755.430937500205,
        18.106054306030273,
        "2001430932715010000",
        0.15278764069080353,
        -1,
      ],
    ],
  },
  {
    name: "o",
    type: "scatter",
    scale: true,
    color: "#FFA500FF",
    symbolSize: 6,
    encode: {
      x: 0,
      y: 1,
    },
    data: [],
  },
  {
    name: "g",
    type: "custom",
    scale: true,
    color: "#56E03AFF",
    data: [[59761.43459489988, 17.5553779900074, 17.733966797590256]],
  },
  {
    name: "r",
    type: "custom",
    scale: true,
    color: "#D42F4BFF",
    data: [[59755.430937500205, 17.95326666533947, 18.258841946721077]],
  },
  {
    name: "o",
    type: "custom",
    scale: true,
    color: "#FFA500FF",
    data: [],
  },
  {
    name: "r non-detections",
    type: "scatter",
    scale: true,
    color: "#D42F4B88",
    symbol:
      "path://M0,49.017c0-13.824,11.207-25.03,25.03-25.03h438.017c13.824,0,25.029,11.207,25.029,      25.03L262.81,455.745c0,0-18.772,18.773-37.545,0C206.494,436.973,0,49.017,0,49.017z",
    symbolSize: 6,
    data: [[59742.403819399886, 19.36479949951172]],
  },
];
const expectedLegends = [
  "g",
  "r",
  "o",
  "g non-detections",
  "r non-detections",
  "o non-detections",
];

const expectedOptions = plotOptionsFactory(
  expectedSeries,
  expectedLegends,
  "#fff",
  () => null
);

test("Apparent produces correct series", () => {
  const options = apparentPlotOptions(mockDetections, mockNonDetections)('#fff', () => null)
  expect(options.series[0].data).toEqual(expectedOptions.series[0].data);
})