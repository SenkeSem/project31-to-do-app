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
      invalidatesTags: ['Tasks', 'ProjectStatistics'],
    }),

    updateTask: build.mutation({
      query: ({ body, taskId }) => ({
        url: `tasks/${taskId}`,
        method: 'PUT',
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

    fetchAssignedToTasks: build.query({
      query: () => ({
        url: `user-tasks/${localStorage.getItem('user_id')}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        // TODO: ПОДУМАТЬ КУДА ЗАСУНУТЬ ЭТОТ ЗАПРОС!!!
      }),
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

    fetchProjectTasks: build.query({
      query: (projectId) => ({
        url: `project-tasks/${projectId}`,
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

    taskMembersSearch: build.query({
      query: (str) => ({
        url: `task-members-search?query=${str}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    // TODO: придумать куда применить этот запрос!
    fetchParticipateInTasks: build.query({
      query: (userId) => ({
        url: `participate-in-tasks/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useFetchUserTasksQuery,
  useDeleteTaskMutation,
  useFetchOneTaskQuery,
  useFetchProjectTasksQuery,
  useFetchTaskCommentsQuery,
  useCreateTaskCommentMutation,
  useDeleteTaskCommentMutation,
  useFetchAssignedToTasksQuery,
  useTaskMembersSearchQuery,
  useFetchParticipateInTasksQuery,
} = tasksApi;
