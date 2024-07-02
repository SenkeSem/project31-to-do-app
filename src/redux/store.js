import { configureStore } from '@reduxjs/toolkit';
import { mokeApi } from './mokeApi';

export const store = configureStore({
  reducer: {
    [mokeApi.reducerPath]: mokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mokeApi.middleware),
});
