import SearchResults from "../SearchResults.vue";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { useSearchStore } from "@/ui/stores/search";
import { __setTestType } from "@/app/object/use-cases/__mocks__/getObjectList";

installPinia();
installQuasar();

vi.mock("@/ui/stores/search");

describe("Show Results", () => {
  it("shows table with results", async () => {
    __setTestType("success");
    const wrapper = mount(SearchResults);
    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain("No data available");
    const store = useSearchStore();
    store.search();
    await flushPromises();
    expect(wrapper.text()).not.toContain("No data available");
  });
});
