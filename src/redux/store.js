import { configureStore } from '@reduxjs/toolkit';
import { toDoApi } from './ToDoApi';

export const store = configureStore({
  reducer: {
    [toDoApi.reducerPath]: toDoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(toDoApi.middleware),
});
