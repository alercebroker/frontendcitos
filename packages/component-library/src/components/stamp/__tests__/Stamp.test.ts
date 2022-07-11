/**
 * @jest-environment jsdom
 */

import { mount } from "@vue/test-utils";
import StampCard from "../StampCard.vue";
import { detections } from "./__mocks__";

test("Stamps snapshot", () => {
  const stamps = mount(StampCard as any, {
    props: {
      detections,
      imageServiceUrl: "http://avro.alerce.online/get_stamp",
      objectId: "ZTF20aaelulu",
    },
  });
  expect(stamps.element).toMatchSnapshot();
});
