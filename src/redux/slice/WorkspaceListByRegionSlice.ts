import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataType {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  profile_img: string;
  workspace_capacity: number;
  workspace_obj: number;
  workspace_type: number;
}

interface ApiState {
  loading: boolean;
  error: string | null;
  data: DataType[];
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: [],
};

const WorkSpaceListByRegionSlice = createSlice({
  name: 'workspacelistByRegion',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<DataType[]>) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setError, setData} =
  WorkSpaceListByRegionSlice.actions;

export default WorkSpaceListByRegionSlice.reducer;
