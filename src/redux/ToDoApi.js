import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toDoApi = createApi({
  reducerPath: 'mokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),

    loginUser: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),

    getTodos: build.query({
      query: () => ({
        url: '/todos',
        method: 'GET',
      }),
    }),

    getTodo: build.query({
      query: (id) => ({
        url: `/todo/${id}`,
        method: 'GET',
      }),
    }),

    createTodo: build.mutation({
      query: (body) => ({
        url: '/todo',
        method: 'POST',
        body,
      }),
    }),

    updateTodo: build.mutation({
      query: (body, id) => ({
        url: `/todo/${id}`,
        method: 'PUT',
        body,
      }),
    }),

    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetTodosQuery,
  useGetTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = toDoApi;
