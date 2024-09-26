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
      invalidatesTags: ['Tasks'],
    }),

    fetchUserTasks: build.query({
      query: () => ({
        url: `user-tasks/${localStorage.getItem('user_id')}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Tasks'],
    }),

    deleteTask: build.mutation({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['Tasks'],
    }),

    fetchOneTask: build.query({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    fetchTaskComments: build.query({
      query: (taskId) => ({
        url: `tasks-comments/${taskId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Comments'],
    }),

    createTaskComment: build.mutation({
      query: (body) => ({
        url: `comments`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
      invalidatesTags: ['Comments'],
    }),

    deleteTaskComment: build.mutation({
      query: (commentId) => ({
        url: `comments/${commentId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateTaskMutation,
  useFetchUserTasksQuery,
  useDeleteTaskMutation,
  useFetchOneTaskQuery,
  useFetchTaskCommentsQuery,
  useCreateTaskCommentMutation,
  useDeleteTaskCommentMutation,
} = tasksApi;
