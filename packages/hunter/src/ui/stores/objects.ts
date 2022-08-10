import { Callbacks, Command } from "@/application/common";
import type { CompleteObjectFilter } from "@/application/common/types";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const objectStoreFactory = (searchObjectsUseCase: Command) => {
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

    let objectList = reactive<PaginatedList<ObjectEntity>>({
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

    const callbacks: Callbacks = {
      handleSuccess(data: PaginatedList<ObjectEntity>) {
        objectList = data;
      },
      handleErrors: {
        handleGenericError(error) {
          errorStatus.value = error;
        },
      },
    };

    function searchByFilter(filter: CompleteObjectFilter) {
      filters.value = filter;
      searchObjectsUseCase.execute(callbacks, filter);
    }

    //testing purposes only
    function _setObjectList(list: ObjectEntity[]) {
      objectList.items = list;
    }

    function selectObject(aid: string) {
      const selectedObject = objectList.items.find(
        (object) => object.aid === aid
      );
      selected.value = selectedObject;
    }

    return {
      filters,
      objectList,
      selected,
      errorStatus,
      searchByFilter,
      selectObject,
      _setObjectList,
    };
  });
};
