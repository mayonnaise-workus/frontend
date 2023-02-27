import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/PostRegionSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';

export const PostRegionApi = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.post(
        MEMBER.REGION,
        {
          location_ids: data,
        },
        {
          headers: {Authorization: `Bearer ${header}`},
        },
      );
      const jsonValue = JSON.stringify(response.status);
      dispatch(setData(jsonValue));
      dispatch(setError(null));
    } catch (error) {
      console.log(error);
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
