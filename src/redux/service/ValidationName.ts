import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/ValidationNameSlice';
import {VALIDATION} from '../../config/config';

interface IPostNickNameProps {
  name: string;
}

export const ValidationName = (data: IPostNickNameProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(VALIDATION.NAME, data);
      dispatch(setData(response.data));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.response.data.message));
    }
    dispatch(setLoading(false));
  };
};
