import { useSearchStore } from "@/ui/stores/search";
import { storeToRefs } from "pinia";
import { watch } from "vue";

export function useSearchObjects() {
  const searchStore = useSearchStore();

  const { filters } = storeToRefs(searchStore);

  const search = searchStore.search;

  watch(
    () => filters.value.firstmjdDate,
    (newDate) => {
      filters.value.firstmjd.from = searchStore.convertGregToMjd(
        newDate.from as string
      );
      filters.value.firstmjd.to = searchStore.convertGregToMjd(
        newDate.to as string
      );
    }
  );

  watch(
    () => filters.value.firstmjd,
    (newMjd) => {
      filters.value.firstmjdDate.from = searchStore.convertMjdToGreg(
        newMjd.from as number
      );
      filters.value.firstmjdDate.to = searchStore.convertMjdToGreg(
        newMjd.to as number
      );
    }
  );
  return { filters, search };
}
