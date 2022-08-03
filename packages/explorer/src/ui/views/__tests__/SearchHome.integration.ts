import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import {
  mockedModule,
  __setTestType,
} from "@/app/object/adapters/__tests__/http-client.mock";
import { useSearchStore } from "@/ui/stores/search";
import SearchHome from "../SearchHome.vue";
import { mount } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { objects } from "@/app/object/adapters/__tests__/listObjectResponse.mock";

vi.mock("@alercebroker/http-client", () => mockedModule);
installQuasar();
installPinia();

describe("Search", () => {
  it("search from premade query", async () => {
    __setTestType("success");
    const wrapper = mount(SearchHome);
    const store = useSearchStore();
    expect(wrapper).toBeTruthy();
    const btn = wrapper.get('[data-test="search"]');
    await btn.trigger("click");
    expect(store.results).toStrictEqual(objects);
    expect(store.filters.aid).toStrictEqual([]);
    expect(store.componentFilters.aid).toBe("");
  });

  it.todo("should use correct filters", () => {
    mockedModule.AlertsClient.queryObjects = vi.fn();
    const wrapper = mount(SearchHome);
    const btn = wrapper.get('[data-test="search"]');
  });
});
