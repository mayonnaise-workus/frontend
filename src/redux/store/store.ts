import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../slice/LoginSlice';
import ServiceTermReducer from '../slice/ServiceTermSlice';
import PostNickNameReducer from '../slice/PostNicknameSlice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    serviceterm: ServiceTermReducer,
    nickname: PostNickNameReducer,
  },
});
