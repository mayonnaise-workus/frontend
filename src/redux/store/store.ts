import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from '../slice/LoginSlice';
import ServiceTermReducer from '../slice/ServiceTermSlice';
import PostNickNameReducer from '../slice/PostNicknameSlice';
import PostRegionReducer from '../slice/PostRegionSlice';
import PostPurposeReducer from '../slice/PostPurposeSlice';
import PostWorkSpaceReducer from '../slice/PostWorkSpaceslice';
import MemberReducer from '../slice/MemberSlice';
import EditNicknameReducer from '../slice/EditNicknameSlice';
import LogoutReducer from '../slice/LogoutSlice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    serviceterm: ServiceTermReducer,
    nickname: PostNickNameReducer,
    region: PostRegionReducer,
    purpose: PostPurposeReducer,
    workspace: PostWorkSpaceReducer,
    member: MemberReducer,
    editNickname: EditNicknameReducer,
    logout: LogoutReducer,
  },
});
