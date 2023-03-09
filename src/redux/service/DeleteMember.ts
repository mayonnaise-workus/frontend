import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError} from '../slice/DeleteMemberSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeleteMember = (data: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      await axios.delete(MEMBER.MEMBER, {
        headers: {Authorization: `Bearer ${header}`},
        params: {data: data},
      });
      AsyncStorage.removeItem('user');
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.response.data.message));
    }
    dispatch(setLoading(false));
  };
};
