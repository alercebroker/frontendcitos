import { container, containerBuilder } from "@/common/container/container";
import { TYPES } from "@/common/container/types";
import { isHttpError, ParseError } from "@alercebroker/http-client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Filters, IObjectService } from "../../domain";
import { ObjectRepositoryMock } from "../ObjectRepository.mock";

beforeEach(() => {
  containerBuilder();
  container().rebind(TYPES.ObjectRepository).to(ObjectRepositoryMock);
});

afterEach(() => {
  container().unbindAll();
});

describe("Search Objects Success", () => {
  container().bind("testType").toConstantValue("success");
  it("should fetch objects and return DTO", () => {
    const service = container().get<IObjectService>(TYPES.ObjectService);
    const filters: Filters = {};
    const result = service.searchObjects(filters);
    expect(result.isOk).toBeTruthy();
    result.map((objectList) => {
      expect(objectList.total).toBe(1);
      expect(objectList.items[0].aid).toBe("aid");
    });
  });
});

describe("Search Objects Error", () => {
  it("should return client error", () => {
    container().bind("testType").toConstantValue("clientError");
    const service = container().get<IObjectService>(TYPES.ObjectService);
    const filters: Filters = {};
    const result = service.searchObjects(filters);
    expect(result.isErr).toBeTruthy();
    result.mapErr((error) => {
      expect(isHttpError(error)).toBeTruthy();
      if (isHttpError(error)) {
        expect(error.isClientError()).toBeTruthy();
      }
    });
  });

  it("should return server error", () => {
    container().bind("testType").toConstantValue("serverError");
    const service = container().get<IObjectService>(TYPES.ObjectService);
    const filters: Filters = {};
    const result = service.searchObjects(filters);
    expect(result.isErr).toBeTruthy();
    result.mapErr((error) => {
      expect(isHttpError(error)).toBeTruthy();
      if (isHttpError(error)) {
        expect(error.isServerError()).toBeTruthy();
      }
    });
  });

  it("should return parse error", () => {
    container().bind("testType").toConstantValue("parseError");
    const service = container().get<IObjectService>(TYPES.ObjectService);
    const filters: Filters = {};
    const result = service.searchObjects(filters);
    expect(result.isErr).toBeTruthy();
    result.mapErr((error) => {
      expect(error instanceof ParseError).toBeTruthy();
    });
  });
});
