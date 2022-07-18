/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AladinViewer from "../AladinViewer.vue";

const objects = [
  {
    oid: "ZTF20aaelulu",
    ndethist: "259",
    ncovhist: 792,
    mjdstarthist: 58855.45880790008,
    mjdendhist: 58967.22704860009,
    corrected: false,
    stellar: false,
    ndet: 58,
    g_r_max: 0.44063377,
    g_r_max_corr: null,
    g_r_mean: 0.69992447,
    g_r_mean_corr: null,
    firstmjd: 58855.54229169991,
    lastmjd: 58967.22704860009,
    deltajd: 111.68475690018386,
    meanra: 185.72886239827588,
    meandec: 15.823611163793103,
    sigmara: 0.000020912251856557,
    sigmadec: 0.000015130516372812443,
    step_id_corr: "corr_bulk_0.0.1",
  },
]

describe("Aladin tests", () => {
  it("snapshot tests", () => {
    const aladin = mount(AladinViewer as any, {
      props: {
        objects,
        initObjectId: "ZTF20aaelulu"
      },
      shallow: true,
    });
    expect(aladin.element).toMatchSnapshot();
  });
});
