import { describe, expect, it, vi } from "vitest";
import { mockedModule, __setTestType } from "./http-client.mock";
import { objectListParser, objectRepository } from "../objectRepository";
import {
  HttpError,
  ParseError,
  type listObjectResponse,
} from "@alercebroker/http-client/build/main/types";

vi.mock("@alercebroker/http-client", () => mockedModule);

describe("Search Objects Success", () => {
  __setTestType("success");
  it("should fetch objects and return entity", async () => {
    const result = await objectRepository.getObjects({});
    result.map((objects) => {
      expect(objects.total).toBe(1);
    });
  });
});

describe("Search Objects Error", () => {
  it("should return client error", async () => {
    __setTestType("clientError");
    const result = await objectRepository.getObjects({});
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });

  it("should return server error", async () => {
    __setTestType("serverError");
    const result = await objectRepository.getObjects({});
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });

  it("should return parse error", async () => {
    __setTestType("parseError");
    const result = await objectRepository.getObjects({});
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(ParseError);
    });
  });
});

describe("Parse object response to object list entity", () => {
  it("should return next with a string representing next page", () => {
    const apiResponse: listObjectResponse = {
      total: 1,
      page: 1,
      next: 2,
      has_next: true,
      prev: 0,
      has_prev: false,
      items: [
        {
          aid: "aid123",
          ndet: 1,
          oid: ["oid456"],
          firstmjd: 123,
          lastmjd: 456,
          meanra: 111,
          meandec: 222,
        },
      ],
    };
    const parsed = objectListParser.parseTo(apiResponse);
    expect(parsed.items.length).toBe(1);
    expect(parsed.items[0].firstGreg).toBeTypeOf("string");
    expect(parsed.items[0].lastGreg).toBeTypeOf("string");
    expect(parsed.items[0].raHms).toBeTypeOf("string");
    expect(parsed.items[0].decHms).toBeTypeOf("string");
  });
});
