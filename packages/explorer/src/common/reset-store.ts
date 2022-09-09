import cloneDeep from "lodash.clonedeep";

export default function resetStore({ store }): void {
  const initialState = cloneDeep(store.$state);
  store.$reset = () => store.$patch(cloneDeep(initialState));
}
