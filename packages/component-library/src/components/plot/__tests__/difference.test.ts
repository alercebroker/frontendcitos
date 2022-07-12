import { describe, it, expect } from "vitest";
import { mockDetections } from "./__mocks__";
import { differencePlotOptions } from "../difference";
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
    symbol: "circle",
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
];

const expectedLegends = ["g", "r", "o"];
const expectedOptions = plotOptionsFactory(
  expectedSeries,
  expectedLegends,
  "#fff",
  () => null
);

describe("Difference produces correct series", () => {
  it("options", () => {
    const options = differencePlotOptions(mockDetections, [])(
      "fff",
      () => null
    );
    expect(options.series[0].data).toEqual(expectedOptions.series[0].data);
  });
});
