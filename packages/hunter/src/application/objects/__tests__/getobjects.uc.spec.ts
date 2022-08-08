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
        expect(data.items[0].firstDetection.candid).toEqual("candid1");
      },
      handleErrors: {
        handleGenericError: jest.fn(),
      },
    };
    getObjects.execute(testCallbacks, {});
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
    const handleGenericError = jest.fn();
    const testCallbacks: Callbacks = {
      handleSuccess: jest.fn(),
      handleErrors: {
        handleGenericError,
      },
    };
    await getObjects.execute(testCallbacks, {});
    expect(handleGenericError).toHaveBeenCalled();
  });
});
