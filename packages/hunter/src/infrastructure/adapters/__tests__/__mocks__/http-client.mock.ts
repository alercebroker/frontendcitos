import { vi } from "vitest";
import { objects } from "./objectlist.mock";

const AlertsClientMock = {
  queryDetections: vi.fn(),
  queryObjects: vi.fn(),
  querySingleObject: vi.fn(),
};

export type MockedAlertsClient = typeof AlertsClientMock;

export function setSuccessCase(mock: MockedAlertsClient) {
  mock.queryObjects.mockResolvedValueOnce(objects);
  mock.queryDetections.mockResolvedValueOnce([]);
}

export function setFailureCase(
  mock: MockedAlertsClient,
  errorFactory?: () => Error,
) {
  if (!errorFactory)
    errorFactory = () => new Error("Default Error");

  mock.queryObjects.mockRejectedValueOnce(errorFactory());
  mock.queryDetections.mockResolvedValueOnce([]);
}

export const mockAlertsModule = () => ({
  AlertsClient: AlertsClientMock,
  isHttpError: vi.fn(),
  isParseError: vi.fn()
});
