import { toDoApi } from '../ToDoApi';

const tasksApi = toDoApi.injectEndpoints({
  endpoints: (build) => ({
    createTask: build.mutation({
      query: (body) => ({
        url: `tasks`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      // invalidatesTags: ['CheckLists'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateTaskMutation } = tasksApi;
