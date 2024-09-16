import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toDoApi = createApi({
  reducerPath: 'mokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://todolist.dev2.cogniteq.com/api/v1/' }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),

    signIn: build.mutation({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),

    signOut: build.mutation({
      query: (body) => ({
        url: 'sign-out',
        method: 'POST',
        body,
      }),
    }),

    createNote: build.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
    }),

    fetchUserNotes: build.query({
      query: (id) => ({
        url: `user-notes/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useCreateNoteMutation,
  useFetchUserNotesQuery,
} = toDoApi;
