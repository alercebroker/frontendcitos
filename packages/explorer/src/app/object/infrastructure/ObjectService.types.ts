export type Range = {
  min: number;
  max: number;
};

export type FilterObject = {
  aid: string[];
  oid: string[];
  ndet: Range;
  firstmjd: Range;
  ra: number;
  dec: number;
  radius: number;
};
