import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../slice/LoginSlice';
import ServiceTermReducer from '../slice/ServiceTermSlice';
import PostNickNameReducer from '../slice/PostNicknameSlice';
import PostRegionReducer from '../slice/PostRegionSlice';
import PostPurposeReducer from '../slice/PostPurposeSlice';
import PostWorkSpaceReducer from '../slice/PostWorkSpaceslice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    serviceterm: ServiceTermReducer,
    nickname: PostNickNameReducer,
    region: PostRegionReducer,
    purpose: PostPurposeReducer,
    workspace: PostWorkSpaceReducer,
  },
});
