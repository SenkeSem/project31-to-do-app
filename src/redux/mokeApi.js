import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mokeApi = createApi({
  reducerPath: 'mokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    getPeople: build.query({
      query: () => 'people',
    }),
  }),
});

export const { useGetPeopleQuery } = mokeApi;
