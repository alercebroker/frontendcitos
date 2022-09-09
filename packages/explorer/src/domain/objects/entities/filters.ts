export type ObjectListFilters = {
  aid?: string[];
  oid?: string[];
  ndet?: number[];
  firstmjd?: number[];
  lastmjd?: number[];
  ra?: number;
  dec?: number;
  radius?: number;
  page?: number;
  page_size?: number;
  count?: string;
  order_by?: string;
  order_mode?: string;
};
