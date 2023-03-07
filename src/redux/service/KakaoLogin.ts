import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setKakao} from '../slice/KakaoLoginSlice';
import {LOGIN} from '../../config/config';

interface ILoginProps {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
export const KakaoLogin = (data: ILoginProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(LOGIN.KAKAO_LOGIN, data);
      const jsonValue = JSON.stringify(response.data);
      dispatch(setKakao(jsonValue));
      if (response.data) {
        AsyncStorage.setItem('user', jsonValue);
      }
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }

    dispatch(setLoading(false));
  };
};
