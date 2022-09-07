import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
vi.mock("@/ui/stores/search");
import SearchResults from "../SearchResults.vue";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { __setTestType } from "@/app/object/use-cases/__mocks__/getObjectList";
import { routes } from "@/ui/router";
import { createRouter, createWebHashHistory, type Router } from "vue-router";
import { useSearchStore } from "@/ui/stores/search";
import type { QTable } from "quasar";

installQuasar();
installPinia();

let router: Router;
let wrapper: VueWrapper<SearchResults>;
let store: ReturnType<typeof useSearchStore>;

beforeEach(async () => {
  router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });

  __setTestType("success");
  wrapper = mount(SearchResults, {
    global: {
      plugins: [router],
    },
  });
  store = useSearchStore();
});

afterEach(() => {
  store.$reset();
});

describe("Show Results", () => {
  it("shows table with results", async () => {
    expect(wrapper).toBeTruthy();
  });
});

describe("Search from url", () => {
  it("searches using url querystring", async () => {
    router.push({ name: "results", query: { oid: "oid123" } });
    await router.isReady();

    const search = vi.spyOn(store, "search");

    wrapper = mount(SearchResults, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper).toBeTruthy();

    expect(store.filters.oid).toEqual("oid123");
    expect(search).toHaveBeenCalledOnce();
  });
});

describe("Pagination", () => {
  it("triggers a search and sets correct pagination filters when table triggers request", async () => {
    const search = vi.spyOn(store, "search");
    const table = wrapper.getComponent<QTable>("[data-test='resultsTable']");

    table.vm.requestServerInteraction({
      pagination: {
        page: 2,
        sortBy: "",
        descending: false,
        rowsPerPage: 20,
      },
    });
    await flushPromises();

    expect(store.filters.sortBy).toBe("");
    expect(store.filters.descending).toBe(false);
    expect(store.filters.rowsPerPage).toBe(20);
    expect(store.filters.page).toBe(2);

    expect(search).toHaveBeenCalledOnce();

    expect(wrapper.vm.paginationOpts.sortBy).toBe("");
    expect(wrapper.vm.paginationOpts.descending).toBe(false);
    expect(wrapper.vm.paginationOpts.rowsPerPage).toBe(20);
    expect(wrapper.vm.paginationOpts.page).toBe(2);
  });
});

describe("Select Object", () => {
  it("goes to object details view if object is selected from the table", async () => {
    const spy = vi.spyOn(router, "push");
    await wrapper.vm.onRowClick(null, null, 0);
    expect(spy).toHaveBeenCalledWith({
      name: "object",
      params: { objectId: "aid" },
    });
  });
});
