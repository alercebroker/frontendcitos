import { describe, it, beforeAll, expect, vi } from "vitest";
import type { Callbacks, Command } from "@/application/common";
import { getObjectsListUseCase } from "../getobjects.uc";
import {
  TestTypes,
  mockObjectRepositoryFactory,
} from "./__mocks__/object.repository.mock";

describe("Success test", () => {
  let getObjects: Command;
  beforeAll(() => {
    getObjects = getObjectsListUseCase(
      mockObjectRepositoryFactory(TestTypes.SUCCESS)
    );
  });

  it("should create a list with objects wth their first detection", () => {
    const testCallbacks: Callbacks = {
      handleSuccess: (data) => {
        // filters the detection which doesn't meet the criteria
        expect(data.items.length).toBe(1);
        expect(data.items[0].firstDetection.candid).toEqual("candid1");
      },
      handleErrors: {
        handleGenericError: vi.fn(),
      },
    };
    getObjects.execute(testCallbacks, { magnitude: { min: 0, max: 50 } });
  });
});

describe("Failure test", () => {
  let getObjects: Command;
  beforeAll(() => {
    getObjects = getObjectsListUseCase(
      mockObjectRepositoryFactory(TestTypes.FAILURE)
    );
  });

  it("should call the handleGenericError function", async () => {
    const handleGenericError = vi.fn();
    const testCallbacks: Callbacks = {
      handleSuccess: vi.fn(),
      handleErrors: {
        handleGenericError,
      },
    };
    await getObjects.execute(testCallbacks, {});
    expect(handleGenericError).toHaveBeenCalled();
  });
});
