import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/PostNicknameSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';

export const PostNickNameApi = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.post(MEMBER.NAME, data, {
        headers: {Authorization: `Bearer ${header}`},
      });
      const jsonValue = JSON.stringify(response.data);
      dispatch(setData(jsonValue));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
