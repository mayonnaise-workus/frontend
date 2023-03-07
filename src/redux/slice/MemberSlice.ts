import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  member: any;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  member: null,
};

const MemberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setMemebr: (state, action: PayloadAction<any>) => {
      state.member = action.payload;
    },
  },
});

export const {setLoading, setError, setMemebr} = MemberSlice.actions;

export default MemberSlice.reducer;
