import { toDoApi } from '../ToDoApi';

const projectsApi = toDoApi.injectEndpoints({
  endpoints: (build) => ({
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
      query: (userId) => ({
        url: `user-projects/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Projects'],
    }),

    fetchOneProject: build.query({
      query: (projectId) => ({
        url: `projects/${projectId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    deleteProject: build.mutation({
      query: (projectId) => ({
        url: `projects/${projectId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      invalidatesTags: ['Projects'],
    }),

    projectSearch: build.query({
      query: (projectTitle) => ({
        url: `projects-search?query=${projectTitle}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    fetchProjectStatistics: build.query({
      query: (userId) => ({
        url: `projects-statistics/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['ProjectStatistics'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateProjectMutation,
  useFetchAllUserProjectsQuery,
  useDeleteProjectMutation,
  useFetchOneProjectQuery,
  useProjectSearchQuery,
  useFetchProjectStatisticsQuery,
} = projectsApi;
