import {createSlice} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  access_token: string | null;
  refresh_token: string | null;
  expires_in: number | undefined;
  name: string;
  marketing_agreement: boolean;
  personal_information_agreement: boolean;
  purpose_ids: Array<string>;
  location_ids: Array<string>;
  workspace_purpose_ids: Array<string>;
  kakao: boolean;
  kakaoValue: string | null;
  google: boolean;
  googleValue: string | null;
  apple: boolean;
  appleValue: string | null;
  id: string | null;
  serverAuthCode: string | null;
  authorizationCode: string | null;
  user: string | null;
}
const initialState: ApiState = {
  loading: false,
  error: null,
  access_token: '',
  refresh_token: '',
  expires_in: undefined,
  name: '',
  marketing_agreement: false,
  personal_information_agreement: false,
  purpose_ids: [],
  location_ids: [],
  workspace_purpose_ids: [],
  kakao: false,
  kakaoValue: '',
  google: false,
  googleValue: '',
  apple: false,
  appleValue: '',
  id: '',
  serverAuthCode: '',
  authorizationCode: '',
  user: '',
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setKakao(state, action) {
      state.kakao = action.payload;
    },
    setKakaoValue(state, action) {
      state.kakaoValue = action.payload;
    },
    setAccess_token(state, action) {
      state.access_token = action.payload;
    },
    setRefresh_token(state, action) {
      state.refresh_token = action.payload;
    },
    setExpires_in(state, action) {
      state.expires_in = action.payload;
    },
    setGoogle(state, action) {
      state.google = action.payload;
    },
    setGoogleValue(state, action) {
      state.googleValue = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setServerAuthCode(state, action) {
      state.serverAuthCode = action.payload;
    },
    setApple(state, action) {
      state.apple = action.payload;
    },
    setAppleValue(state, action) {
      state.appleValue = action.payload;
    },
    setAuthorizationCode(state, action) {
      state.authorizationCode = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setMarketing_agreement(state, action) {
      state.marketing_agreement = action.payload;
    },
    setPersonal_information_agreement(state, action) {
      state.personal_information_agreement = action.payload;
    },
    setPurpose_ids(state, action) {
      state.purpose_ids = action.payload;
    },
    setLocation_ids(state, action) {
      state.location_ids = action.payload;
    },
    setWorkspace_purpose_ids(state, action) {
      state.workspace_purpose_ids = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setKakao,
  setKakaoValue,
  setAccess_token,
  setRefresh_token,
  setExpires_in,
  setGoogle,
  setGoogleValue,
  setId,
  setServerAuthCode,
  setApple,
  setAppleValue,
  setAuthorizationCode,
  setUser,
  setName,
  setMarketing_agreement,
  setPersonal_information_agreement,
  setPurpose_ids,
  setLocation_ids,
  setWorkspace_purpose_ids,
} = signUpSlice.actions;
export default signUpSlice.reducer;
