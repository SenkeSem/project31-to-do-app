import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toDoApi = createApi({
  reducerPath: 'mokeApi',
  tagTypes: ['Notes', 'Projects', 'CheckLists', 'Tasks'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://todolist.dev2.cogniteq.com/api/v1/' }),
  endpoints: () => ({}),
});
