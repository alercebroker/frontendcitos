export type TokenHandler<T> = {
  getToken: () => T;
  storeToken: (token: T) => void;
  clearToken: () => void;
};