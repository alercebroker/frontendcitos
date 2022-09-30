import { vi } from "vitest";
import { Callbacks, Command } from "@/application/common";
import { objectStoreFactory } from "../objects";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { LocalTokenHandler } from "@/application/common/tokenhandler";
import { authStoreFactory } from "@alercebroker/component-library/src/utils/stores";
import { LightCurveEntity } from "@/domain/entities/lightcurve.entity";

const mockResponse: PaginatedList<ObjectEntity> = {
  total: 0,
  page: 1,
  prev: 1,
  next: 1,
  hasPrev: false,
  hasNext: false,
  items: [
    {
      aid: "AID4321",
      ra: 15,
      dec: 50,
      firstmjd: 50000,
      firstGreg: "111111",
      lastmjd: 50001,
      lastGreg: "2222222",
      firstDetection: null,
    },
  ],
};

const mockLightcurve: LightCurveEntity = {
  detections: [],
  non_detections: [],
};

export const mockGetObjectsCommand: Command = {
  execute: vi.fn().mockImplementation((cb: Callbacks) => {
    cb.handleSuccess(mockResponse);
  }),
};

export const mockGetLightcurveCommand: Command = {
  execute: vi.fn().mockImplementation((cb: Callbacks) => {
    cb.handleSuccess(mockLightcurve);
  }),
};

export const useObjectStore = objectStoreFactory(
  mockGetObjectsCommand,
  mockGetLightcurveCommand
);
export const useAuth = authStoreFactory(LocalTokenHandler(), "url");
