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

    fetchUserStatistics: build.query({
      query: (user_id) => ({
        url: `users-statistics/${user_id}`,
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
    }),
  }),
  overrideExisting: false,
});

export const { useFetchUserQuery, useFetchUserStatisticsQuery, useDownloadUserAvatarQuery } =
  userApi;