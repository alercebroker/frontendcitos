import { describe, it, beforeAll, expect, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { installQuasar } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { installPinia } from "./utils/pinia";
import { SearchComponent } from "@/ui/components/SearchComponent";

vi.mock("@/ui/stores");
import { mockGetObjectsCommand } from "@/ui/stores/__mocks__";

installQuasar();
installPinia();

describe("SearchComponent test", () => {
  let searchComponent: VueWrapper;
  beforeAll(() => {
    searchComponent = mount(SearchComponent, {});
  });
  it("mount", () => {
    expect(searchComponent).toBeTruthy();
  });
  it("click the search button", async () => {
    const button = searchComponent.findComponent("button");
    await button.trigger("click");
    expect(mockGetObjectsCommand.execute).toHaveBeenCalled();
  });
});
