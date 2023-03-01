import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/WorkSpaceListSlice';
import {WORKSPACE} from '../../config/config';
import {authHeader} from './auth-header';

export const WorkSpaceListApi = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();
    console.log(header);

    try {
      const response = await axios.get(
        `${WORKSPACE.WORKSPACE_LIST}?region=1,2`,
        {
          headers: {Authorization: `Bearer ${header}`},
        },
      );
      dispatch(setData(JSON.stringify(response.data)));
      dispatch(setError(null));
    } catch (error) {
      console.log(error);
      dispatch(setError('An error occurred'));
    }

    dispatch(setLoading(false));
  };
};
