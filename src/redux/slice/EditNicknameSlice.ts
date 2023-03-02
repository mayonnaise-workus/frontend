import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  userLoading: boolean;
  userError: string | null;
  user: any;
}

const initialState: ApiState = {
  userLoading: false,
  userError: null,
  user: null,
};

const EditNicknameSlice = createSlice({
  name: 'editNickname',
  initialState,
  reducers: {
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
    setUserError: (state, action: PayloadAction<string>) => {
      state.userError = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const {setUserLoading, setUserError, setUser} =
  EditNicknameSlice.actions;

export default EditNicknameSlice.reducer;
