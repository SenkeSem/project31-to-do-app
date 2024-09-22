import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toDoApi = createApi({
  reducerPath: 'mokeApi',
  tagTypes: ['Notes', 'Projects', 'CheckLists'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://todolist.dev2.cogniteq.com/api/v1/' }),
  endpoints: (build) => ({
    // auth

    // TODO: move this query to another slice like auth
    signUp: build.mutation({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),
    // TODO: move this query to another slice like auth
    refreshToken: build.mutation({
      query: (body) => ({
        url: 'refresh-token',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
    }),
    // TODO: move this query to another slice like auth
    signIn: build.mutation({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),
    // TODO: move this query to another slice like auth
    signOut: build.mutation({
      query: (body) => ({
        url: 'sign-out',
        method: 'POST',
        body,
      }),
    }),

    //notes TODO: move this query to another slice like notes

    createNote: build.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      invalidatesTags: ['Notes'],
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

    //user TODO: move this query to another slice like user

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

    downloadUserAvatar: build.query({
      query: (user_id) => ({
        url: `users-avatar/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data;',
        },
      }),
    }),

    //projects TODO: move this query to another slice like project

    createProject: build.mutation({
      query: (body) => ({
        url: 'projects',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      invalidatesTags: ['Projects'],
    }),

    fetchAllUserProjects: build.query({
      query: (user_id) => ({
        url: `user-projects/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Projects'],
    }),

    deleteProject: build.mutation({
      query: (project_id) => ({
        url: `projects/${project_id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['Projects'],
    }),

    //checklists TODO: move this query to another slice like checklist

    createChecklist: build.mutation({
      query: (body) => ({
        url: 'checklists',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      invalidatesTags: ['CheckLists'],
    }),

    fetchAllUserChecklists: build.query({
      query: (user_id) => ({
        url: `user-checklists/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['CheckLists'],
    }),

    deleteChecklist: build.mutation({
      query: (checklist_id) => ({
        url: `checklists/${checklist_id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['CheckLists'],
    }),

    deleteChecklistItem: build.mutation({
      query: (checklist_item_id) => ({
        url: `checklists-items/${checklist_item_id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['CheckLists'],
    }),

    deleteChecklistItems: build.mutation({
      query: (body) => ({
        url: `checklists-items`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      invalidatesTags: ['CheckLists'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useRefreshTokenMutation,
  useSignInMutation,
  useSignOutMutation,
  useCreateNoteMutation,
  useFetchUserNotesQuery,
  useDeleteNoteMutation,
  useFetchUserQuery,
  useFetchUserStatisticsQuery,
  useDownloadUserAvatarQuery,
  useCreateProjectMutation,
  useFetchAllUserProjectsQuery,
  useDeleteProjectMutation,
  useCreateChecklistMutation,
  useFetchAllUserChecklistsQuery,
  useDeleteChecklistMutation,
  useDeleteChecklistItemMutation,
  useDeleteChecklistItemsMutation,
} = toDoApi;
