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

const PostPurposeSlice = createSlice({
  name: 'purpose',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setError, setData} = PostPurposeSlice.actions;

export default PostPurposeSlice.reducer;
