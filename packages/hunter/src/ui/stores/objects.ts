import { Callbacks, Command } from "@/application/common";
import type { CompleteObjectFilter } from "@/application/common/types";
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
    const lightcurve = ref<LightCurveEntity>({
      detections: [],
      non_detections: [],
    });

    function searchByFilter(filter: CompleteObjectFilter) {
      const callbacks: Callbacks = {
        handleSuccess(data: PaginatedList<ObjectEntity>) {
          objectList.value = data;
        },
        handleErrors: {
          handleGenericError(error) {
            errorStatus.value = error;
          },
        },
      };
      filters.value = filter;
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
      console.log(_lightcurve);
      lightcurve.value = _lightcurve;
    }

    watch(selected, (newSelected) => {
      console.log("store watcher", newSelected);
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
              console.log(error);
              errorStatus.value = error;
            },
          },
        },
        aid
      );
    }

    return {
      filters,
      objectList,
      lightcurve,
      selected,
      errorStatus,
      searchByFilter,
      selectObject,
      getDetections,
      _setObjectList,
    };
  });
};
