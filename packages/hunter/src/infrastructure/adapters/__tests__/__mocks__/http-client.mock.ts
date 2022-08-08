import { objects } from "./objectlist.mock";

const AlertsClientMock = {
  queryDetections: jest.fn(),
  queryObjects: jest.fn(),
  querySingleObject: jest.fn(),
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
  isHttpError: jest.fn(),
  isParseError: jest.fn()
});
