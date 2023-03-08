import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError} from '../slice/DeleteFavoriteWorkSpacesSlice';
import {authHeader} from './auth-header';
import {MEMBER} from '../../config/config';

export const DeleteFavoriteWorkSpaces = (params: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      await axios.delete(`${MEMBER.FAVORITE_WORKSPACE}/${params}`, {
        headers: {Authorization: `Bearer ${header}`},
      });
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.response.data.message));
    }

    dispatch(setLoading(false));
  };
};
