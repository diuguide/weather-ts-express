import { configureStore } from '@reduxjs/toolkit';
// import your reducers here

export const store = configureStore({
  reducer: {
    // your reducers here
  },
  devTools: process.env.NODE_ENV !== 'production',
});