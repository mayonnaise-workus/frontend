import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  error: null,
};

const LogoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {setLoading, setError} = LogoutSlice.actions;

export default LogoutSlice.reducer;
