import { mjdToGreg, ObjectEntity } from "@/domain/entities/object.entity";

const objectFactory = (): ObjectEntity => ({
  aid: "AID1" + String(Math.floor(Math.random() * 3000 + 1000)),
  ra: 15,
  dec: 50,
  firstmjd: 55000,
  lastmjd: 55001,
  firstGreg: mjdToGreg(55000),
  lastGreg: mjdToGreg(55001),
  firstDetection: {
    mjd: 55000,
    candid: String(Math.random() * 10000).padStart(5, "0"),
    mag: 20,
    fid: 1,
    ra: 15,
    dec: 50,
  },
});

const objects: ObjectEntity[] = Array.from({ length: 10 }, (v, k) =>
  objectFactory()
);
export { objects };
