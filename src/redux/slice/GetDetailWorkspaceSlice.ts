import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataType {
  id: number;
  name: string;
  address: string;
  contact: string;
  latitude: number;
  longitude: number;
  workspace_type: number;
  workspace_obj: number;
  profile_img: string;
  workspace_images: string[];
  workspace_homepage: string;
  workspace_info: string;
}

interface ApiState {
  loading: boolean;
  error: string | null;
  data: DataType;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: {
    id: 0,
    name: '',
    address: '',
    contact: '',
    latitude: 0,
    longitude: 0,
    workspace_type: 1,
    workspace_obj: 1,
    profile_img: '',
    workspace_images: [],
    workspace_homepage: '',
    workspace_info: '',
  },
};

const GetDetailWorkspaceSlice = createSlice({
  name: 'GetDetailWorkspace',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<DataType>) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setError, setData} = GetDetailWorkspaceSlice.actions;

export default GetDetailWorkspaceSlice.reducer;
