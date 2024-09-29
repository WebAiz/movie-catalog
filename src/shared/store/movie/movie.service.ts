import { generatedApi } from "../../api/fetchQuery.ts";
import {
  GetMovieCatalogsPayload,
  GetMovieCatalogsResponse,
} from "./movie.interface.ts";

export const accountsApi = generatedApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieCatalogs: build.query<
      GetMovieCatalogsResponse,
      GetMovieCatalogsPayload
    >({
      query: (data) => ({
        url: "https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8",
        params: {
          s: data.title,
          page: data.page || 1,
        },
      }),
    }),
  }),
});

export const { useLazyGetMovieCatalogsQuery, useGetMovieCatalogsQuery } =
  accountsApi;
