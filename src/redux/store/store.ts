import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../slice/LoginSlice';
import ServiceTermReducer from '../slice/ServiceTermSlice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    serviceterm: ServiceTermReducer,
  },
});
