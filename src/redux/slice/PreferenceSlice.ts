import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ObjectType {
  preference_workspace_purposes: number[];
  preference_workspace_regions: number[];
  preference_workspace_types: number[];
}

interface ApiState {
  loading: boolean;
  error: string | null;
  data: ObjectType;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: {
    preference_workspace_purposes: [],
    preference_workspace_regions: [],
    preference_workspace_types: [],
  },
};

const PreferenceSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<ObjectType>) => {
      state.data = action.payload;
    },
  },
});

export const {setLoading, setError, setData} = PreferenceSlice.actions;

export default PreferenceSlice.reducer;
