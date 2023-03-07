import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  apple: any;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  apple: null,
};

const AppleLoginSlice = createSlice({
  name: 'applelogin',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setApple: (state, action: PayloadAction<any>) => {
      state.apple = action.payload;
    },
  },
});

export const {setLoading, setError, setApple} = AppleLoginSlice.actions;

export default AppleLoginSlice.reducer;
