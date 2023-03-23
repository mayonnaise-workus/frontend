import {createSlice} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  data: number | null;
  name: string;
  marketing_agreement: boolean;
  personal_information_agreement: boolean;
  purpose_ids: Array<string>;
  location_ids: Array<string>;
  workspace_purpose_ids: Array<string>;
}
const initialState: ApiState = {
  loading: false,
  error: null,
  data: null,
  name: '',
  marketing_agreement: false,
  personal_information_agreement: false,
  purpose_ids: [],
  location_ids: [],
  workspace_purpose_ids: [],
};

const SignUpDataSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
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
  setData,
  setName,
  setMarketing_agreement,
  setPersonal_information_agreement,
  setPurpose_ids,
  setLocation_ids,
  setWorkspace_purpose_ids,
} = SignUpDataSlice.actions;
export default SignUpDataSlice.reducer;
