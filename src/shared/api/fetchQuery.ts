import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export const accessTokenBaseQuery = fetchBaseQuery({
  baseUrl: "",
  prepareHeaders: (headers: any) => {
    return headers;
  },
});

export const authClientBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return accessTokenBaseQuery(args, api, extraOptions);
};

export const generatedApi = createApi({
  reducerPath: "generatedApi",
  tagTypes: [],
  baseQuery: authClientBaseQuery,
  endpoints: () => ({}),
});
