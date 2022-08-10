import {
  mockAlertsModule,
  setSuccessCase,
  setFailureCase,
} from "./__mocks__/http-client.mock";
import type { MockedAlertsClient } from "./__mocks__/http-client.mock";

const mockAlerts = mockAlertsModule;
jest.doMock("@alercebroker/http-client", () => {
  return mockAlerts();
});

import { objectRepository } from "../object.repository";
// so http-client is the mockAlertsModule to this point
import { AlertsClient } from "@alercebroker/http-client";
import { HttpError } from "@alercebroker/http-client/src/types";

describe("Search objects success", () => {
  beforeEach(() => {
    setSuccessCase(AlertsClient as unknown as MockedAlertsClient);
  });

  it("should fetch a paginated list of objects", async () => {
    const result = await objectRepository.getObjects({});
    result.map((objects) => {
      expect(objects.items).toEqual([]);
    });
  });

  it("should fetch a list of detections", async () => {
    const result = await objectRepository.getDetections("AID4321");
    result.map((detections) => {
      expect(detections).toEqual([]);
    });
  });
});

describe("Search objects failure cases", () => {
  it("should return client error", async () => {
    setFailureCase(
      AlertsClient as unknown as MockedAlertsClient,
      () => new HttpError(400)
    );
    const result = await objectRepository.getObjects({});
    result.mapErr((e) => {
      expect(e).toBeInstanceOf(HttpError);
    });
  });
});
