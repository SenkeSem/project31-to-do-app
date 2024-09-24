import { toDoApi } from '../ToDoApi';

const authApi = toDoApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),

    refreshToken: build.mutation({
      query: (body) => ({
        url: 'refresh-token',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body,
      }),
    }),

    signIn: build.mutation({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),

    signOut: build.mutation({
      query: (body) => ({
        url: 'sign-out',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignUpMutation, useRefreshTokenMutation, useSignInMutation, useSignOutMutation } =
  authApi;
