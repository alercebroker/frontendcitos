import type { FilterObject } from "@/app/object/infrastructure/ObjectService.types";
import type { SearchObjects } from "@/app/object/use-case/SearchObjects";
import { TYPES } from "@/common/container/types";
import { inject, injectable } from "inversify";
import { defineStore } from "pinia";
import type { IStoreFactory } from "./types";

export type PremadeQuery = {
  title: string;
  category: string;
  description: string;
  image: string;
  filters: FilterObject;
};

export type SearchState = {
  filters: FilterObject;
  premadeQueries: PremadeQuery[];
};

const useSearchStore = (searchObjectsUseCase: SearchObjects) => {
  return defineStore('search',
    {
      state: (): SearchState => ({
        filters: {
          aid: [],
          oid: [],
          ndet: {
            min: -999,
            max: -999,
          },
          firstmjd: {
            min: -999,
            max: -999,
          },
          ra: -999,
          dec: -999,
          radius: -999,
        },
        premadeQueries: [
          {
            title: "Query Title 1",
            category: "Query Category",
            description: "Query Description",
            image:
              "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
            filters: {
              aid: [],
              oid: [],
              ndet: {
                min: -999,
                max: -999,
              },
              firstmjd: {
                min: -999,
                max: -999,
              },
              ra: -999,
              dec: -999,
              radius: -999,
            },
          },
          {
            title: "Query Title 2",
            category: "Query Category",
            description: "Query Description",
            image:
              "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
            filters: {
              aid: [],
              oid: [],
              ndet: {
                min: -999,
                max: -999,
              },
              firstmjd: {
                min: -999,
                max: -999,
              },
              ra: -999,
              dec: -999,
              radius: -999,
            },
          },
          {
            title: "Query Title 3",
            category: "Query Category",
            description: "Query Description",
            image:
              "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
            filters: {
              aid: [],
              oid: [],
              ndet: {
                min: -999,
                max: -999,
              },
              firstmjd: {
                min: -999,
                max: -999,
              },
              ra: -999,
              dec: -999,
              radius: -999,
            },
          },
          {
            title: "Query Title 4",
            category: "Query Category",
            description: "Query Description",
            image:
              "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
            filters: {
              aid: [],
              oid: [],
              ndet: {
                min: -999,
                max: -999,
              },
              firstmjd: {
                min: -999,
                max: -999,
              },
              ra: -999,
              dec: -999,
              radius: -999,
            },
          },
        ],
      }),
      actions: {
        search(filters: FilterObject) {
          searchObjectsUseCase.execute(filters, {
            respondWithSuccess: () => { },
            respondWithClientError: () => { },
            respondWithParseError: () => { },
            respondWithServerError: () => { },
          });
        },
      },
    }
  )
}

@injectable()
export class SearchStoreFactory implements IStoreFactory<ReturnType<typeof useSearchStore>>{
  private searchObjectsUseCase: SearchObjects

  constructor(@inject(TYPES.SearchObjectsUseCase) useCase: SearchObjects) {
    this.searchObjectsUseCase = useCase
  }

  create(): ReturnType<typeof useSearchStore> {
    return useSearchStore(this.searchObjectsUseCase)
  }

}
