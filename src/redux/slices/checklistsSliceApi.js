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
  overrideExisting: false,
});

export const {
  useCreateChecklistMutation,
  useFetchAllUserChecklistsQuery,
  useDeleteChecklistMutation,
  useDeleteChecklistItemMutation,
  useDeleteChecklistItemsMutation,
} = checklistsApi;
