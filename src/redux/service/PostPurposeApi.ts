import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/PostPurposeSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';

export const PostPurposeApi = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.post(
        MEMBER.PURPOSE,
        {
          purpose_ids: data,
        },
        {
          headers: {Authorization: `Bearer ${header}`},
        },
      );
      const jsonValue = JSON.stringify(response.status);
      dispatch(setData(jsonValue));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
