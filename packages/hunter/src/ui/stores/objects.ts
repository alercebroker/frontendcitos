import { Callbacks, Command } from "@/application/common";
import type { CompleteObjectFilter } from "@/application/common/types";
import { populateFirstDetections } from "@/application/objects";
import { LightCurveEntity } from "@/domain/entities/lightcurve.entity";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const objectStoreFactory = (
  searchObjectsUseCase: Command,
  getLightcurveUseCase: Command
) => {
  return defineStore("objects", () => {
    //is this even necesary?
    const filters = ref<CompleteObjectFilter>({
      firstmjd: [],
      lastmjd: [],
      report: "Supernova",
      telescope: "ZTF",
      magnitude: {
        min: 0,
        max: 500,
      },
    });

    const objectList = ref<PaginatedList<ObjectEntity>>({
      total: 0,
      page: 1,
      next: 2,
      hasNext: false,
      prev: 0,
      hasPrev: false,
      items: [],
    });

    const selected = ref<ObjectEntity>();
    const errorStatus = ref<any>(null);
    const isLoading = ref(false);
    const lightcurve = ref<LightCurveEntity>({
      detections: [],
      non_detections: [],
    });

    function searchByFilter(filter: CompleteObjectFilter) {
      errorStatus.value = null;
      const callbacks: Callbacks = {
        handleSuccess(data: PaginatedList<ObjectEntity>) {
          objectList.value = data;
          populateDetections(0, 15);
          isLoading.value = false;
        },
        handleErrors: {
          handleGenericError(error) {
            errorStatus.value = error;
            isLoading.value = false;
          },
        },
      };
      filters.value = filter;
      isLoading.value = true;
      searchObjectsUseCase.execute(callbacks, filter);
    }

    //testing purposes only
    function _setObjectList(list: ObjectEntity[]) {
      objectList.value.items = list;
    }

    function selectObject(aid: string) {
      const selectedObject = objectList.value.items.find(
        (object) => object.aid === aid
      );
      selected.value = selectedObject;
    }

    function _setLightcurve(_lightcurve: LightCurveEntity) {
      lightcurve.value = _lightcurve ?? { detections: [], non_detections: [] };
    }

    watch(selected, (newSelected) => {
      if (newSelected) getDetections(newSelected.aid);
    });

    function getDetections(aid: string) {
      getLightcurveUseCase.execute(
        {
          handleSuccess: (lightcurve) => {
            _setLightcurve(lightcurve);
          },
          handleErrors: {
            handleGenericError(error) {
              errorStatus.value = error;
            },
          },
        },
        aid
      );
    }

    function populateDetections(from: number, to: number) {
      if (objectList.value.items.length <= 0) return;
      isLoading.value = true;
      populateFirstDetections.execute(
        {
          handleSuccess: (populatedObjects: ObjectEntity[]) => {
            objectList.value = {
              ...objectList.value,
              items: populatedObjects,
            };
            isLoading.value = false;
          },
          handleErrors: {
            handleGenericError(error) {
              errorStatus.value = error;
            },
          },
        },
        { objects: objectList.value.items, from, to }
      );
    }

    return {
      filters,
      objectList,
      isLoading,
      lightcurve,
      selected,
      errorStatus,
      searchByFilter,
      selectObject,
      getDetections,
      populateDetections,
      _setObjectList,
    };
  });
};
