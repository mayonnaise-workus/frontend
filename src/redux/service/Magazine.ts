import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/MagazineSlice';
import {MAGAZINE} from '../../config/config';
import {authHeader} from './auth-header';

export const Magazine = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();

    try {
      const response = await axios.get(MAGAZINE, {
        headers: {Authorization: `Bearer ${header}`},
      });
      dispatch(setData(response.data));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
