import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setApple} from '../slice/AppleLoginSlice';
import {LOGIN} from '../../config/config';

interface AppleLoginProps {
  authorizationCode: string | null;
  user: string | null;
}
export const AppleLogin = (data: AppleLoginProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(LOGIN.APPLE_LOGIN, data);
      const jsonValue = JSON.stringify(response.data);
      dispatch(setApple(jsonValue));
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
