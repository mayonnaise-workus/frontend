import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/FavoriteWorkSpacesSlice';
import {authHeader} from './auth-header';
import {MEMBER} from '../../config/config';

export const FavoriteWorkSpaces = (params: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.post(
        `${MEMBER.FAVORITE_WORKSPACE}/${params}`,
        '',
        {
          headers: {Authorization: `Bearer ${header}`},
        },
      );
      dispatch(setData(response.data));
      dispatch(setError(null));
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    }

    dispatch(setLoading(false));
  };
};
