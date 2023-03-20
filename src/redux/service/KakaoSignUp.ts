import {RootState} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {LOGIN} from '../../config/config';
import {setError, setKakaoValue, setLoading} from '../slice/SignUpDataSlice';

export const KakaoSignUp = async (userData: RootState) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(LOGIN.KAKAO_LOGIN, {
        access_token: userData.access_token,
        refresh_token: userData.refresh_token,
        expires_in: userData.expires_in,
        name: userData.name,
        marketing_agreement: userData.marketing_agreement,
        personal_information_agreement: userData.personal_information_agreement,
        purpose_ids: userData.purpose_ids,
        location_ids: userData.location_ids,
        workspace_purpose_ids: userData.workspace_purpose_ids,
      });

      const jsonValue = JSON.stringify(response.data);
      dispatch(setKakaoValue(response.status));

      if (response.data) {
        AsyncStorage.setItem('user', jsonValue);
      }
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('An error occurred'));
    }

    dispatch(setLoading(false));
  };
};
