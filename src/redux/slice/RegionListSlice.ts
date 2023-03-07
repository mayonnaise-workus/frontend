import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  data: number[];
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: [],
};

const RegionListSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<number[]>) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setError, setData} = RegionListSlice.actions;

export default RegionListSlice.reducer;
