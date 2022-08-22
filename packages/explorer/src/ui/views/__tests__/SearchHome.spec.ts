import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import SearchHome from "../SearchHome.vue";
import { mount } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { useSearchStore } from "@/ui/stores/search";
import { __setTestType } from "@/app/object/use-cases/__mocks__/getObjectList";

installQuasar();
installPinia();

vi.mock("@/ui/stores/search");

describe("Search", () => {
  it("search from premade query", async () => {
    __setTestType("success");
    const wrapper = mount(SearchHome);
    const store = useSearchStore();
    expect(wrapper).toBeTruthy();
    const btn = wrapper.get('[data-test="premade-search"]');
    await btn.trigger("click");
    expect(store.results.items.length).toBe(1);
    expect(store.results.items[0].aid).toBe("aid");
    expect(store.filters.oid).toStrictEqual([]);
    expect(store.componentFilters.oid).toBe("");
  });
});
