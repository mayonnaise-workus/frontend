import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../slice/LoginSlice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});
