import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi, afterEach } from "vitest";
import {
  mockedModule,
  __setTestType,
} from "@/app/object/adapters/__tests__/http-client.mock";
import { useSearchStore } from "@/ui/stores/search";
import SearchHome from "../SearchHome.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { objects } from "@/app/object/adapters/__tests__/listObjectResponse.mock";

vi.mock("@alercebroker/http-client", () => mockedModule);
installQuasar();
installPinia();

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Search from premade query", () => {
  it("should trigger a search and store results", async () => {
    __setTestType("success");
    const wrapper = mount(SearchHome);
    const store = useSearchStore();
    expect(wrapper).toBeTruthy();
    const btn = wrapper.get('[data-test="premade-search"]');
    await btn.trigger("click");
    expect(store.results).toStrictEqual(objects);
    expect(store.filters.aid).toStrictEqual([]);
    expect(store.componentFilters.aid).toBe("");
  });
});

describe("Search with filters", () => {
  describe("Search with general filters", () => {
    __setTestType("success");
    it("should use correct filters", async () => {
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const wrapper = mount(SearchHome);
      wrapper.vm.searchInput.aid = "aid1,aid2,aid3";
      wrapper.vm.searchInput.ndet = { min: 10, max: 20 };
      const btn = wrapper.get('[data-test="button-search"]');
      await btn.trigger("click");
      expect(mock.mock.calls[0][0].aid).toStrictEqual(["aid1", "aid2", "aid3"]);
      expect(mock.mock.calls[0][0].ndet).toStrictEqual([10, 20]);
    });
  });
  describe("Search with date filters", () => {
    it("should use correct filters if gregorian date is used", async () => {
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const wrapper = mount(SearchHome);
      wrapper.vm.searchInput.firstmjdDate = {
        from: "1995/01/13",
        to: "1995/01/14",
      };
      const btn = wrapper.get('[data-test="button-search"]');
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
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const wrapper = mount(SearchHome);
      wrapper.vm.searchInput.firstmjd = {
        from: 49730,
        to: 49731,
      };
      await flushPromises();
      expect(wrapper.vm.searchInput.firstmjdDate.from).toBe(
        new Date("1995-01-13").toUTCString()
      );
      expect(wrapper.vm.searchInput.firstmjdDate.to).toBe(
        new Date("1995-01-14").toUTCString()
      );
      const btn = wrapper.get('[data-test="button-search"]');
      await flushPromises();
      await btn.trigger("click");
      expect(mock.mock.calls[0][0].firstmjd).toStrictEqual([49730, 49731]);
    });
  });

  describe("Search with conesearch filters", () => {
    it("should use correct filters if ra, dec, radius are used", async () => {
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const wrapper = mount(SearchHome);
      wrapper.vm.searchInput.coordinates.ra = 10;
      wrapper.vm.searchInput.coordinates.dec = 20;
      wrapper.vm.searchInput.coordinates.radius = 30;
      await flushPromises();
      const btn = wrapper.get('[data-test="button-search"]');
      await btn.trigger("click");
      expect(mock.mock.calls[0][0].ra).toBe(10);
      expect(mock.mock.calls[0][0].dec).toBe(20);
      expect(mock.mock.calls[0][0].radius).toBe(30);
    });
    it("should fail if not all of ra, dec, radius are used", async () => {
      mockedModule.AlertsClient.queryObjects = vi.fn();
      const mock = vi.mocked(mockedModule.AlertsClient.queryObjects);
      const wrapper = mount(SearchHome);
      wrapper.vm.searchInput.coordinates.ra = 10;
      wrapper.vm.searchInput.coordinates.dec = 20;
      wrapper.vm.searchInput.coordinates.radius = null;
      await flushPromises();
      const btn = wrapper.get('[data-test="button-search"]');
      await btn.trigger("click");
      expect(mock).not.toBeCalled();
    });
  });
});
