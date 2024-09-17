import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toDoApi = createApi({
  reducerPath: 'mokeApi',
  tagTypes: ['Notes'],
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
      providesTags: ['Notes'],
    }),

    fetchUserNotes: build.query({
      query: (user_id) => ({
        url: `user-notes/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Notes'],
    }),

    deleteNote: build.mutation({
      query: (note_id) => ({
        url: `notes/${note_id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['Notes'],
    }),

    fetchUser: build.query({
      query: (user_id) => ({
        url: `users/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    fetchUserStatistics: build.query({
      query: (user_id) => ({
        url: `users-statistics/${user_id}`,
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
  useDeleteNoteMutation,
  useFetchUserQuery,
  useFetchUserStatisticsQuery,
} = toDoApi;
