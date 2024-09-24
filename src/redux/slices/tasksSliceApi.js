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
      providesTags: ['Tasks'],
    }),

    fetchUserTasks: build.query({
      query: () => ({
        url: `user-tasks/${localStorage.getItem('user_id')}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateTaskMutation, useFetchUserTasksQuery } = tasksApi;
