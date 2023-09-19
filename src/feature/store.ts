import { configureStore } from '@reduxjs/toolkit';
import systemReducer from './system/SystemSlicer';
export const store = configureStore({
  reducer: {
    system: systemReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});