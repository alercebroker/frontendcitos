import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  mockedModule,
  __setTestType,
} from "@/app/object/adapters/__tests__/http-client.mock";
import { useSearchStore } from "@/ui/stores/search";
import SearchHome from "../SearchHome.vue";
import SearchCardHorizontal from "@ui/components/SearchCardHorizontal.vue";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { installPinia } from "@/common/test_utils/quasar";
import { objects } from "@/app/object/adapters/__tests__/listObjectResponse.mock";
import { createRouter, createWebHashHistory, type Router } from "vue-router";
import { routes } from "@/ui/router";
import routerOriginal from "@/ui/router";

installQuasar();
installPinia();

let store: ReturnType<typeof useSearchStore>;
let router: Router;

beforeEach(async () => {
  vi.mock("@alercebroker/http-client", () => mockedModule);
  router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });
  router.push("/");
  await router.isReady();
  __setTestType("success");
});

afterEach(() => {
  store.$reset();
  vi.resetAllMocks();
});

describe("Search from premade query", () => {
  it("should trigger a search and store results", async () => {
    const searchHomeWrapper = mount(SearchHome, {
      global: {
        plugins: [router],
      },
    });
    store = useSearchStore();
    expect(searchHomeWrapper).toBeTruthy();
    const btn = searchHomeWrapper.get('[data-test="premade-search"]');
    await btn.trigger("click");
    await flushPromises();
    expect(store.results).toStrictEqual(objects);
    expect(store.filters.oid).toStrictEqual("");
  });
});

describe("Search with filters", () => {
  describe("Search with general filters", () => {
    __setTestType("success");
    it("should use correct filters", async () => {
      const searchHomeWrapper = mount(SearchHome, {
        global: {
          plugins: [router],
        },
      });
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const searchComp = searchHomeWrapper.getComponent(SearchCardHorizontal);
      searchComp.vm.filters.oid = "aid1,aid2,aid3";
      searchComp.vm.filters.ndet = { min: 10, max: 20 };
      const btn = searchHomeWrapper.get('[data-test="button-search"]');
      await btn.trigger("click");
      expect(mock.mock.calls[0][0].oid).toStrictEqual(["aid1", "aid2", "aid3"]);
      expect(mock.mock.calls[0][0].ndet).toStrictEqual([10, 20]);
    });
  });
  describe("Search with date filters", () => {
    it("should use correct filters if gregorian date is used", async () => {
      const searchHomeWrapper = mount(SearchHome, {
        global: {
          plugins: [router],
        },
      });
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const searchComp = searchHomeWrapper.getComponent(SearchCardHorizontal);
      searchComp.vm.filters.firstmjdDate = {
        from: "1995/01/13",
        to: "1995/01/14",
      };
      const btn = searchHomeWrapper.get('[data-test="button-search"]');
      await flushPromises();
      await btn.trigger("click");
      expect(
        mock.mock.calls[0][0].firstmjd
          ? mock.mock.calls[0][0].firstmjd[0]
          : -999
      ).toBeCloseTo(49730, 0.5);
      expect(
        mock.mock.calls[0][0].firstmjd
          ? mock.mock.calls[0][0].firstmjd[1]
          : -999
      ).toBeCloseTo(49731, 0.5);
    });

    it("should use correct filters if mjd is used", async () => {
      const searchHomeWrapper = mount(SearchHome, {
        global: {
          plugins: [router],
        },
      });
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const searchComp = searchHomeWrapper.getComponent(SearchCardHorizontal);
      searchComp.vm.filters.firstmjd = {
        from: 49730,
        to: 49731,
      };
      await flushPromises();
      expect(searchComp.vm.filters.firstmjdDate.from).toBe(
        new Date("1995-01-13").toUTCString()
      );
      expect(searchComp.vm.filters.firstmjdDate.to).toBe(
        new Date("1995-01-14").toUTCString()
      );
      const btn = searchHomeWrapper.get('[data-test="button-search"]');
      await flushPromises();
      await btn.trigger("click");
      expect(mock.mock.calls[0][0].firstmjd).toStrictEqual([49730, 49731]);
    });
  });

  describe("Search with conesearch filters", () => {
    it("should use correct filters if ra, dec, radius are used", async () => {
      const searchHomeWrapper = mount(SearchHome, {
        global: {
          plugins: [router],
        },
      });
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const searchComp = searchHomeWrapper.getComponent(SearchCardHorizontal);
      searchComp.vm.filters.coordinates.ra = 10;
      searchComp.vm.filters.coordinates.dec = 20;
      searchComp.vm.filters.coordinates.radius = 30;
      await flushPromises();
      const btn = searchHomeWrapper.get('[data-test="button-search"]');
      await btn.trigger("click");
      expect(mock.mock.calls[0][0].ra).toBe(10);
      expect(mock.mock.calls[0][0].dec).toBe(20);
      expect(mock.mock.calls[0][0].radius).toBe(30);
    });
    it("should fail if not all of ra, dec, radius are used", async () => {
      const searchHomeWrapper = mount(SearchHome, {
        global: {
          plugins: [router],
        },
      });
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const searchComp = searchHomeWrapper.getComponent(SearchCardHorizontal);
      searchComp.vm.filters.coordinates.ra = 10;
      searchComp.vm.filters.coordinates.dec = 20;
      searchComp.vm.filters.coordinates.radius = null;
      await flushPromises();
      const btn = searchHomeWrapper.get('[data-test="button-search"]');
      await btn.trigger("click");
      expect(mock).not.toBeCalled();
    });
  });
});

describe("Change to results view on search", () => {
  it("should change to results view on search", async () => {
    const searchHomeWrapper = mount(SearchHome, {
      global: {
        plugins: [router],
      },
    });
    const push = vi.spyOn(routerOriginal, "push");
    const btn = searchHomeWrapper.get('[data-test="button-search"]');
    await btn.trigger("click");
    await flushPromises();
    expect(push).toHaveBeenCalledOnce();
  });
});
