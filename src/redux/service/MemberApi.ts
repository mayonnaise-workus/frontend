import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setMemebr} from '../slice/MemberSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';

export const MemberApi = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.get(MEMBER.MEMBER, {
        headers: {Authorization: `Bearer ${header}`},
      });
      dispatch(setMemebr(response.data));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
