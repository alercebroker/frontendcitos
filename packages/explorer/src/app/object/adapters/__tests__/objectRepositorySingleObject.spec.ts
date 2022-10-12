import { describe, expect, it, vi } from "vitest";
import { mockedModule, __setTestType } from "./http-client.mock";
import { objectSingleParser, objectRepository } from "../objectRepository";
import {
  HttpError,
  ParseError,
  type singleObjectResponse,
} from "@alercebroker/http-client/build/main/types";
vi.mock("@alercebroker/http-client", () => mockedModule);

describe("Search Single Objects Success", () => {
  __setTestType("success");
  it("should fetch objects and return an single Object Entity", async () => {
    const result = await objectRepository.getObject("aid");
    result.map((object) => {
      expect(object.object_basic_info.ndet).toBe(1);
    });
  });
});

describe("Search Single Objects Error", () => {
  it("should return client error", async () => {
    __setTestType("clientError");
    const result = await objectRepository.getObject("aid");
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });

  it("should return server error", async () => {
    __setTestType("serverError");
    const result = await objectRepository.getObject("aid");
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });

  it("should return parse error", async () => {
    __setTestType("parseError");
    const result = await objectRepository.getObject("aid");
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(ParseError);
    });
  });
});

describe("Parse Single Object response to Single Object Entity", () => {
  it("Should parse a complete response", () => {
    const apiResponse: singleObjectResponse = {
      aid: "aid",
      oid: ["oid1", "oid2"],
      ndet: 1,
      firstmjd: 123,
      lastmjd: 456,
      meanra: 111,
      meandec: 222,
      probabilities: [
        {
          classifier_name: "stamp_classifier",
          classifier_version: "stamp_classifier_1.0.0",
          class_name: "AGN",
          probability: 0.086826704,
          ranking: 2
        },
      ],
      magstats: [
        {
          fid: 1,
          ndet: 116,
          magmean: 18.709673,
          magmedian: 18.653234,
          magmax: 19.837292,
          magmin: 17.859047,
          magsigma: 0.4470002,
          maglast: 18.36436,
          magfirst: 18.229092,
          firstmjd: 58366.44,
          lastmjd: 59542.28,
          'ingestion-step': "0.4333",
        },
      ],
      xmatch: [],
      features: [],
    };
    // no ser pajero
    const parsed = objectSingleParser.parseTo(apiResponse);
    expect(parsed).toBeTypeOf("object");
    expect(parsed.magstats).toBeTypeOf("object");
    expect(parsed.object_basic_info).toBeTypeOf("object");
    expect(parsed.probabilities).toBeTypeOf("object");
  });

  it("Should parse a response missing probabilities and/or magstats", () => {
    const apiResponse: singleObjectResponse = {
      aid: "aid",
      oid: ["oid1", "oid2"],
      ndet: 1,
      firstmjd: 123,
      lastmjd: 456,
      meanra: 111,
      meandec: 222,
      probabilities: null,
      magstats: null,
      xmatch: null,
      features: null,
    };
    const parsed = objectSingleParser.parseTo(apiResponse);
    expect(parsed).toBeTypeOf("object");
    expect(parsed.magstats).toBeTypeOf("object");
    expect(parsed.object_basic_info).toBeTypeOf("object");
    expect(parsed.probabilities).toBeTypeOf("object");
  });
});