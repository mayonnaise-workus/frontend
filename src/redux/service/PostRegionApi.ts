import axios from 'axios';
import {Dispatch} from 'redux';
import {setLoading, setError, setData} from '../slice/PostRegionSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';
import {Alert} from 'react-native';

export const PostRegionApi = (data: number[]) => {
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
      dispatch(setData(response.status));
      Alert.alert('저장 완료', '수정한 지역 정보를 저장했어요');
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }
    dispatch(setLoading(false));
  };
};
