import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/ServiceTermSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';

interface IServiceTermProps {
  marketing_agreement: boolean;
  personal_information_agreement: boolean;
}
export const ServiceTermApi = (data: IServiceTermProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.post(MEMBER.AGREEMENT, data, {
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
