import { toDoApi } from '../ToDoApi';

const userApi = toDoApi.injectEndpoints({
  endpoints: (build) => ({
    fetchUser: build.query({
      query: (user_id) => ({
        url: `users/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    uploadUserAvatar: build.mutation({
      query: (data) => ({
        url: `users-avatar`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': `multipart/form-data; boundary=${undefined}`,
        },
        body: data,
        formData: true,
      }),
      invalidatesTags: ['User'],
    }),

    fetchUserStatistics: build.query({
      query: (userId) => ({
        url: `users-statistics/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }),
    }),

    downloadUserAvatar: build.query({
      query: (user_id) => ({
        url: `users-avatar/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'image/jpeg',
        },
        responseHandler: (res) => res.blob(),
      }),
      providesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useFetchUserQuery,
  useFetchUserStatisticsQuery,
  useDownloadUserAvatarQuery,
  useUploadUserAvatarMutation,
} = userApi;
