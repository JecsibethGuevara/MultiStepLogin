import { configureStore } from '@reduxjs/toolkit';
import formReducer from './registerSlice';

const store = configureStore({
  reducer: {
    register : formReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;