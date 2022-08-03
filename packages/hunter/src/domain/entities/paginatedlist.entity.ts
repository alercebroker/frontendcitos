export type PaginatedList<T> = {
  total: number;
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  next: string;
  prev: string;
  items: T[];
};
