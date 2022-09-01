import { Ref, ref } from "vue";

function getItemFromStorage(key: string): string {
  const value = localStorage.getItem(key);
  if (!value) return "";
  return value;
}

export const useLocalStorage = (
  key: string
): [Ref<string>, (s: string) => void] => {
  const value = ref(getItemFromStorage(key));

  //removes the entry if the value is null or is an empty string
  function setItem(newValue: string) {
    value.value = newValue;

    if (!newValue || newValue === "") {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, newValue);
  }

  return [value, setItem];
};
