import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataType {
  list: [
    {
      address: string;
      id: number;
      latitude: number;
      longitude: number;
      name: string;
      profile_img: string;
      workspace_capacity: number;
      workspace_obj: number;
      workspace_region: number;
      workspace_type: number;
    },
  ];
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
    list: [
      {
        address: 'string',
        id: 0,
        latitude: 0,
        longitude: 0,
        name: 'string',
        profile_img: 'string',
        workspace_capacity: 0,
        workspace_obj: 0,
        workspace_region: 0,
        workspace_type: 0,
      },
    ],
  },
};

const WorkSpaceListSlice = createSlice({
  name: 'workspacelist',
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

export const {setLoading, setError, setData} = WorkSpaceListSlice.actions;

export default WorkSpaceListSlice.reducer;
