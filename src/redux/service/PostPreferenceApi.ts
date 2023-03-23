import {RootState} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {MEMBER} from '../../config/config';
import {setError, setData, setLoading} from '../slice/PostPreferenceSlice';
import {authHeader} from './auth-header';

export const PostPreferenceApi = (signUpData: RootState) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const header = await authHeader();

    try {
      const response = await axios.post(
        MEMBER.ONBOARDING,
        {
          name: signUpData.name,
          marketing_agreement: signUpData.marketing_agreement,
          personal_information_agreement:
            signUpData.personal_information_agreement,
          purpose_ids: signUpData.purpose_ids,
          location_ids: signUpData.location_ids,
          workspace_purpose_ids: signUpData.workspace_purpose_ids,
        },
        {
          headers: {Authorization: `Bearer ${header}`},
        },
      );
      const jsonValue = JSON.stringify(response.data);
      dispatch(setData(response.status));

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
