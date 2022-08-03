type NdetRange = {
  min: number | null;
  max: number | null;
};

type DateRange = {
  from: string | null;
  to: string | null;
};

type MjdRange = {
  from: number | null;
  to: number | null;
};

type Coordinates = {
  ra: number | null;
  dec: number | null;
  radius: number | null;
};

export type SearchInput = {
  ndet: NdetRange;
  firstmjdDate: DateRange;
  firstmjd: MjdRange;
  aid: string;
  oid: string;
  coordinates: Coordinates;
};
