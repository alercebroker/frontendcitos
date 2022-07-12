export function customIteratorFactory(array: any[], curr = 0) {
  const length = array.length;
  let current = curr;
  return {
    next() {
      return current + 1 < length ? ++current : current;
    },
    prev() {
      return current - 1 >= 0 ? --current : current;
    },
    current() {
      return current;
    },
    moveTo(element: any) {
      current = array.findIndex((x) => x === element);
      return current;
    },
  };
}
