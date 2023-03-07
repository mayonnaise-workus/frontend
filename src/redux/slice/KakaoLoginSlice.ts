import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  error: string | null;
  kakao: any;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  kakao: null,
};

const KakaoLoginSlice = createSlice({
  name: 'kakaologin',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setKakao: (state, action: PayloadAction<any>) => {
      state.kakao = action.payload;
    },
  },
});

export const {setLoading, setError, setKakao} = KakaoLoginSlice.actions;

export default KakaoLoginSlice.reducer;
