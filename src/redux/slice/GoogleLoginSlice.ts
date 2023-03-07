import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  google: any;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  google: null,
};

const GoogleLoginSlice = createSlice({
  name: 'googlelogin',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setGoogle: (state, action: PayloadAction<any>) => {
      state.google = action.payload;
    },
  },
});

export const {setLoading, setError, setGoogle} = GoogleLoginSlice.actions;

export default GoogleLoginSlice.reducer;
