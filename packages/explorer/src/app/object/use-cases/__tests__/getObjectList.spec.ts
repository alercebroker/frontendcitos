import type {
  ObjectEntity,
  ObjectListEntity,
  ObjectListFilters,
} from "@/domain/objects/entities";
import { isHttpError, isParseError } from "@alercebroker/http-client";
import type {
  HttpError,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import { afterEach, describe, expect, it, vi } from "vitest";
import { __setTestType } from "../../adapters/__mocks__";
import { getObjectListUseCase } from "../di";

vi.mock("@/app/object/adapters");

afterEach(() => {
  vi.clearAllMocks();
});

describe("Successful Search", () => {
  __setTestType("success");

  it("should get an object list", async () => {
    const filters: ObjectListFilters = {
      aid: ["abc"],
    };
    let result: ObjectListEntity = {
      total: 0,
      next: "",
      hasNext: false,
      prev: "",
      hasPrev: false,
      page: 0,
      items: [] as ObjectEntity[],
    };
    await getObjectListUseCase.execute(
      {
        handleSuccess: (data: ObjectListEntity) => {
          result = data;
        },
        handleGenericError: (_) => {},
      },
      filters
    );
    expect(result.total).toBe(1);
  });
});

describe("HttpError", () => {
  it("should return a client error", async () => {
    __setTestType("clientError");
    const filters: ObjectListFilters = {
      aid: ["abc"],
    };
    let result: Error = new Error("generic error");
    await getObjectListUseCase.execute(
      {
        handleSuccess: (_) => {},
        handleGenericError: (_) => {},
        handleHttpClientError: (error: HttpError) => {
          result = error;
        },
      },
      filters
    );
    expect(isHttpError(result)).toBeTruthy();
  });

  it("should return a server error", async () => {
    __setTestType("serverError");
    const filters: ObjectListFilters = {
      aid: ["abc"],
    };
    let result: Error = new Error("generic error");
    await getObjectListUseCase.execute(
      {
        handleSuccess: (_) => {},
        handleGenericError: (_) => {},
        handleHttpServerError: (error: HttpError) => {
          result = error;
        },
      },
      filters
    );
    expect(isHttpError(result)).toBeTruthy();
  });
});

describe("ParseError", () => {
  it("should return a parse error", async () => {
    __setTestType("parseError");
    const filters: ObjectListFilters = {
      aid: ["abc"],
    };
    let result: Error = new Error("generic error");
    await getObjectListUseCase.execute(
      {
        handleSuccess: (_) => {},
        handleGenericError: (_) => {},
        handleParseError: (error: ParseError) => {
          result = error;
        },
      },
      filters
    );
    expect(isParseError(result)).toBeTruthy();
  });
});