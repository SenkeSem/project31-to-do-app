import { toDoApi } from '../ToDoApi';

const notesApi = toDoApi.injectEndpoints({
  endpoints: (build) => ({
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
  }),
  overrideExisting: false,
});

export const { useCreateNoteMutation, useFetchUserNotesQuery, useDeleteNoteMutation } = notesApi;
