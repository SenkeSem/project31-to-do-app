import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosInstance } from '../axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers, transformResponse }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        transformResponse,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const toDoApi = createApi({
  reducerPath: 'mokeApi',
  tagTypes: ['Notes', 'Projects', 'ProjectStatistics', 'CheckLists', 'Tasks', 'User', 'Comments'],
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://todolist.dev2.cogniteq.com/api/v1/',
  }),
  endpoints: () => ({}),
});
