import { toDoApi } from '../ToDoApi';

const checklistsApi = toDoApi.injectEndpoints({
  endpoints: (build) => ({
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

    updateChecklist: build.mutation({
      query: (body) => ({
        url: `checklists/${body.id}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      invalidatesTags: ['CheckLists'],
    }),

    fetchAllUserChecklists: build.query({
      query: (userId) => ({
        url: `user-checklists/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['CheckLists'],
    }),

    deleteChecklist: build.mutation({
      query: (checklistId) => ({
        url: `checklists/${checklistId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['CheckLists'],
    }),

    deleteChecklistItem: build.mutation({
      query: (checklistItemId) => ({
        url: `checklists-items/${checklistItemId}`,
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
  overrideExisting: false,
});

export const {
  useCreateChecklistMutation,
  useUpdateChecklistMutation,
  useFetchAllUserChecklistsQuery,
  useDeleteChecklistMutation,
  useDeleteChecklistItemMutation,
  useDeleteChecklistItemsMutation,
} = checklistsApi;
