import { describe, it, beforeAll, expect, vi } from "vitest";
import { mount, flushPromises, VueWrapper } from "@vue/test-utils";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { installPinia } from "./utils/pinia";
import IndexView from "@/ui/views/IndexView.vue";

vi.mock("@/ui/stores");
vi.mock("@/ui/components/ObjectResults.vue", () => ({
  template: "<span></span>",
}));
import { useObjectStore } from "@/ui/stores";
import { mockGetObjectsCommand } from "@/ui/stores/__mocks__";

installQuasar();
installPinia();

describe("SearchComponent test", () => {
  let indexView: VueWrapper;
  beforeAll(() => {
    indexView = mount(IndexView);
  });
  it("mount", () => {
    expect(indexView).toBeTruthy();
  });
  it("click the search button", async () => {
    const store = useObjectStore();
    const button = indexView.findComponent("button");
    await button.trigger("click");
    expect(mockGetObjectsCommand.execute).toHaveBeenCalled();
    await flushPromises();
    indexView.vm.$nextTick(() => {
      const idColumn = indexView
        .findAll("td")
        .filter((wrapper) => wrapper.text() === "AID4321");
      expect(idColumn.length).toBeGreaterThanOrEqual(1);
      expect(idColumn[0].text()).toEqual("AID4321");
    });
  });
});
