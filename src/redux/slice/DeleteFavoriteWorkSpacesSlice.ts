import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  error: null,
};

const DeleteFavoriteWorkSpacesSlice = createSlice({
  name: 'deleteworkspace',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {setLoading, setError} = DeleteFavoriteWorkSpacesSlice.actions;

export default DeleteFavoriteWorkSpacesSlice.reducer;
