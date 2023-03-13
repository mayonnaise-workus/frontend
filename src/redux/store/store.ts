import {configureStore} from '@reduxjs/toolkit';
import KakaoLoginReducer from '../slice/KakaoLoginSlice';
import ServiceTermReducer from '../slice/ServiceTermSlice';
import PostNickNameReducer from '../slice/PostNicknameSlice';
import PostRegionReducer from '../slice/PostRegionSlice';
import PostPurposeReducer from '../slice/PostPurposeSlice';
import PostWorkSpaceReducer from '../slice/PostWorkSpaceslice';
import MemberReducer from '../slice/MemberSlice';
import EditNicknameReducer from '../slice/EditNicknameSlice';
import LogoutReducer from '../slice/LogoutSlice';
import WorkSpaceListReducer from '../slice/WorkSpaceListSlice';
import WorkSpaceByRegionReducer from '../slice/WorkspaceListByRegionSlice';
import PreferenceReducer from '../slice/PreferenceSlice';
import FavoriteWorkSpacesReducer from '../slice/FavoriteWorkSpacesSlice';
import DeleteFavoriteWorkSpacesReducer from '../slice/DeleteFavoriteWorkSpacesSlice';
import GoogleLoginReducer from '../slice/GoogleLoginSlice';
import AppleLoginReducer from '../slice/AppleLoginSlice';
import DeleteMemberReducer from '../slice/DeleteMemberSlice';
import GetDetailWorkspaceReducer from '../slice/GetDetailWorkspaceSlice';
import OnboardingReducer from '../slice/OnboardingSlice';
import MagazineReducer from '../slice/MagazineSlice';

export const store = configureStore({
  reducer: {
    kakaologin: KakaoLoginReducer,
    googlelogin: GoogleLoginReducer,
    applelogin: AppleLoginReducer,
    serviceterm: ServiceTermReducer,
    nickname: PostNickNameReducer,
    region: PostRegionReducer,
    purpose: PostPurposeReducer,
    workspace: PostWorkSpaceReducer,
    member: MemberReducer,
    editNickname: EditNicknameReducer,
    logout: LogoutReducer,
    workspacelist: WorkSpaceListReducer,
    workspacebyregionlist: WorkSpaceByRegionReducer,
    preference: PreferenceReducer,
    favorieworkspace: FavoriteWorkSpacesReducer,
    deleteworkspace: DeleteFavoriteWorkSpacesReducer,
    deletemember: DeleteMemberReducer,
    detailworkspace: GetDetailWorkspaceReducer,
    onboarding: OnboardingReducer,
    magazine: MagazineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
