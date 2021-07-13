import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import optionsReducer from './optionsSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    options: optionsReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
