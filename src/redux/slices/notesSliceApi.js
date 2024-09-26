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
      query: (userId) => ({
        url: `user-notes/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Notes'],
    }),

    deleteNote: build.mutation({
      query: (noteId) => ({
        url: `notes/${noteId}`,
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
