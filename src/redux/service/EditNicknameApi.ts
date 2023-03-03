import axios from 'axios';
import {Dispatch} from 'redux';
import {
  setUserLoading,
  setUserError,
  setUser,
} from '../slice/EditNicknameSlice';
import {MEMBER} from '../../config/config';
import {authHeader} from './auth-header';
import {Alert} from 'react-native';

interface IEditNickNamProps {
  name: string;
}

export const EditNicknameApi = (data: IEditNickNamProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(setUserLoading(true));
    const header = await authHeader();
    try {
      const response = await axios.post(MEMBER.NAME, data, {
        headers: {Authorization: `Bearer ${header}`},
      });
      dispatch(setUser(response.data));
      Alert.alert('저장 완료', '수정한 계정 정보를 저장했어요');
      dispatch(setUserError(null));
    } catch (error) {
      dispatch(setUserError('An error occurred'));
    }
    dispatch(setUserLoading(false));
  };
};
