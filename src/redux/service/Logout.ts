import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'redux';
import {setLoading, setError} from '../slice/LogoutSlice';

export const Logout = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      AsyncStorage.removeItem('user');
    } catch (error) {
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
