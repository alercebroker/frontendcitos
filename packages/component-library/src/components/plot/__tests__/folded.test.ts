import { mockDetections } from "./__mocks__";
import { foldedPlotOptions } from "../folded";
import { plotOptionsFactory } from "../generic";

const expectedSeries = [
  {
    name: "g",
    type: "scatter",
    scale: true,
    color: "#56E03AFF",
    symbol: "circle",
    symbolSize: 6,
    encode: {
      x: 0,
      y: 1,
    },
    data: [
      [
        0.7172974499408156,
        17.644672393798828,
        "2007434592715010000",
        0.08929440379142761,
        -1,
      ],
      [
        1.7172974499408156,
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
    symbol: "circle",
    symbolSize: 6,
    encode: {
      x: 0,
      y: 1,
    },
    data: [
      [
        0.7154687501024455,
        18.106054306030273,
        "2001430932715010000",
        0.15278764069080353,
        -1,
      ],
      [
        1.7154687501024455,
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
    symbol: "circle",
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
    data: [
      [0.7172974499408156, 17.5553779900074, 17.733966797590256],
      [1.7172974499408156, 17.5553779900074, 17.733966797590256],
    ],
  },
  {
    name: "r",
    type: "custom",
    scale: true,
    color: "#D42F4BFF",
    data: [
      [0.7154687501024455, 17.95326666533947, 18.258841946721077],
      [1.7154687501024455, 17.95326666533947, 18.258841946721077],
    ],
  },
  {
    name: "o",
    type: "custom",
    scale: true,
    color: "#FFA500FF",
    data: [],
  },
];

const expectedLegends = ["g", "r", "o"];
const expectedOptions = plotOptionsFactory(
  expectedSeries,
  expectedLegends,
  "#fff",
  () => null,
  "Period: 2 days"
);

test("Folded produces correct series", () => {
  const options = foldedPlotOptions(mockDetections, [], 2)("#fff", () => null);
  expect(options.series[0].data).toEqual(expectedOptions.series[0].data);
});
