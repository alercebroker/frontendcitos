/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AladinViewer from "../AladinViewer.vue";

const objects = [
  {
    oid: "ZTF20aaelulu",
    meanra: 185.72886239827588,
    meandec: 15.823611163793103,
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
