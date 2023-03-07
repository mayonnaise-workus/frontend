import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setGoogle} from '../slice/GoogleLoginSlice';
import {LOGIN} from '../../config/config';

interface GoogleLoginProps {
  id: string | null;
  serverAuthCode: string | null;
}
export const GoogleLogin = (data: GoogleLoginProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(LOGIN.GOOGLE_LOGIN, data);
      const jsonValue = JSON.stringify(response.data);
      dispatch(setGoogle(jsonValue));
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
