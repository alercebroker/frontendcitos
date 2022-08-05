import { Callbacks, Command } from "@/application/common";
import type { CompleteObjectFilter } from "@/application/common/types";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const objectStoreFactory = (searchObjectsUseCase: Command) => {
  return defineStore("objects", () => {
    //is this even necesary?
    const filters = reactive<CompleteObjectFilter>({
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

    const errorStatus = ref<any>(null);

    const callbacks: Callbacks = {
      handleSuccess(data: PaginatedList<ObjectEntity>) {
        objectList.value = data;
      },
      handleErrors: {
        handleGenericError(error) {
          errorStatus.value = error;
        },
      }
    }

    function searchByFilter(filter: CompleteObjectFilter) {
      searchObjectsUseCase.execute(callbacks, filter)
    }

    return {
      filters,
      objectList,
      errorStatus,
      searchByFilter,
    };
  });
};
