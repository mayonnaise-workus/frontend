import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError} from '../slice/DeleteMemberSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';

export const DeleteMember = (data: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.delete(MEMBER.MEMBER, {
        headers: {Authorization: `Bearer ${header}`},
        params: {data: data},
      });
      console.log(response.data);
      dispatch(setError(null));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.response.data.message));
    }
    dispatch(setLoading(false));
  };
};
