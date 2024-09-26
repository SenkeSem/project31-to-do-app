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
  }),
  overrideExisting: false,
});

export const { useCreateProjectMutation, useFetchAllUserProjectsQuery, useDeleteProjectMutation } =
  projectsApi;
