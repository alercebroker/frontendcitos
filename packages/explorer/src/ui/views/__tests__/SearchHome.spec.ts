import SearchHome from "../SearchHome.vue";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { describe, it, expect, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { installPinia } from "@/common/test_utils/quasar";
import { useSearchStore } from "@/ui/stores/search";
import { __setTestType } from "@/app/object/use-cases/__mocks__/getObjectList";

installPinia();
installQuasar();

vi.mock("@/ui/stores/search");

describe("Premade queries", () => {
  it("search from premade query", async () => {
    __setTestType("success");
    const wrapper = mount(SearchHome);
    const store = useSearchStore();
    expect(wrapper).toBeTruthy();
    const btn = wrapper.get('[data-test="premade-search"]');
    await btn.trigger("click");
    expect(store.results.items.length).toBe(1);
    expect(store.results.items[0].aid).toBe("aid");
    expect(store.filters.oid).toBe("");
  });

  it("should fill parameters in filters when fill parameters button is clicked", async () => {
    __setTestType("success");
    const wrapper = mount(SearchHome);
    const store = useSearchStore();
    store.premadeQueries[0] = {
      title: "Query Title Test",
      category: "Query Category",
      description: "Query Description",
      image:
        "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
      filters: {
        oid: "oid-test",
        ndet: {
          min: null,
          max: null,
        },
        firstmjd: {
          from: null,
          to: null,
        },
        firstmjdDate: {
          from: null,
          to: null,
        },
        coordinates: {
          ra: -999,
          dec: -999,
          radius: -999,
        },
        sortBy: "",
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
    };
    expect(wrapper).toBeTruthy();
    const btn = wrapper.get('[data-test="fill-parameters-0"]');
    await flushPromises();
    await btn.trigger("click");
    expect(store.filters.oid).toStrictEqual("oid-test");
  });
});
