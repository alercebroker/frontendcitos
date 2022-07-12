/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StampCard from "../StampCard.vue";
import { detections } from "./__mocks__";

describe("Stamps snapshot", () => {
  it("snap", () => {
    const stamps = mount(StampCard as any, {
      props: {
        detections,
        imageServiceUrl: "http://avro.alerce.online/get_stamp",
        objectId: "ZTF20aaelulu",
      },
      shallow: true,
      mocks: {
        $q: {
          dark: {},
        },
      },
    });
    expect(stamps.element).toMatchSnapshot();
  });
});
