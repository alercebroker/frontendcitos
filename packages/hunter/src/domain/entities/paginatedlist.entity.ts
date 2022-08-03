export type PaginatedList<T> = {
  total: number;
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  next: number;
  prev: number;
  items: T[];
};
