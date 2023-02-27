import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: null,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setError, setData} = LoginSlice.actions;

export default LoginSlice.reducer;
