import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { container, containerBuilder } from "@/common/container/container";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import SearchHome from "../SearchHome.vue";
import { mount } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { TYPES } from "@/common/container/types";
import { SearchObjectsMock } from "@/app/object/use-case/SearchObjectsMock";
import { storeProvider } from "@/ui/stores/search/storeProvider";

installQuasar();
installPinia();

beforeEach(async () => {
  containerBuilder();
  container().rebind(TYPES.SearchObjectsUseCase).to(SearchObjectsMock);
});

afterEach(() => {
  container().unbindAll();
});

describe("Search", () => {
  container().bind("testType").toConstantValue("success");
  it("search from premade query", async () => {
    const wrapper = mount(SearchHome);
    expect(wrapper).toBeTruthy();
    const btn = wrapper.get('[data-test="search"]');
    await btn.trigger("click");
    const searchStore = storeProvider();
    expect(searchStore.results.items.length).toBe(1);
    expect(searchStore.results.items[0].aid).toBe("aid");
  });
});
