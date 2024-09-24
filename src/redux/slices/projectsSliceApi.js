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
      query: (user_id) => ({
        url: `user-projects/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
      providesTags: ['Projects'],
    }),

    deleteProject: build.mutation({
      query: (project_id) => ({
        url: `projects/${project_id}`,
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
