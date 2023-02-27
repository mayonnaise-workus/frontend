import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/LoginSlice';
import {LOGIN} from '../../config/config';

export const LoginApi = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(LOGIN.KAKAO_LOGIN, data);
      console.log(data);
      const jsonValue = JSON.stringify(response.data);
      console.log(jsonValue);
      dispatch(setData(jsonValue));
      if (response.data) {
        AsyncStorage.setItem('user', jsonValue);
      }
      dispatch(setError(null));
    } catch (error) {
      console.log(error);
      dispatch(setError('An error occurred'));
    }

    dispatch(setLoading(false));
  };
};
