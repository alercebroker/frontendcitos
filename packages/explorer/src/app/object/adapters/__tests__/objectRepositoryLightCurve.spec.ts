import { describe, expect, it, vi } from "vitest";
import { mockedModule, __setTestType } from "./http-client.mock";
import { lightCurveParser, objectRepository } from "../objectRepository";
import {
  HttpError,
  ParseError,
  type lightcurveResponse,
  type singleObjectResponse,
} from "@alercebroker/http-client/build/main/types";
vi.mock("@alercebroker/http-client", () => mockedModule);

describe("Search Object LightCurve Success", () => {
  __setTestType("success");
  it("should fetch an object lightcurve and return an LightCurveEntity", async () => {
    const result = await objectRepository.getLightCurve("aid");
    result.map((object) => {
      expect(object.detections.length).toBe(2);
      expect(object.non_detections.length).toBe(2);
    });
  });
});

describe("Search Object LightCurve Error", () => {
  it("should return client error", async () => {
    __setTestType("clientError");
    const result = await objectRepository.getLightCurve("aid");
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });

  it("should return server error", async () => {
    __setTestType("serverError");
    const result = await objectRepository.getLightCurve("aid");
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });

  it("should return parse error", async () => {
    __setTestType("parseError");
    const result = await objectRepository.getLightCurve("aid");
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(ParseError);
    });
  });
});

describe("Parse LightCurveResponse to LightCurveEntity", () => {
  it("Should parse a complete response", () => {
    const apiResponse: lightcurveResponse = {
      detections: [
        {
          aid: "aid",
          oid: "oid",
          tid: "f",
          mjd: 111,
          candid: "candid",
          fid: 1,
          isdiffpos: 222,
          mag: 1,
          e_mag: 2,
          ra: 333,
          dec: 444,
          rb: 55,
          rbversion: "rb",
          has_stamp: false,
          corrected: false,
          step_id_corr: "step1",
          parent_candid: "pcandid",
        }
      ],
      non_detections: [
        {
          aid: "aid",
          oid: "oid",
          tid: "g",
          mjd: 222,
          fid: 3,
          diffmaglim: 66,
        }
      ]
    };
    // no ser pajero
    const parsed = lightCurveParser.parseTo(apiResponse);
    expect(parsed.detections.length).toBe(1);
    expect(parsed.non_detections.length).toBe(1);
  });
});