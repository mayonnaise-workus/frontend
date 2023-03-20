import {RootState} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from 'redux';
import {LOGIN} from '../../config/config';
import {setError, setGoogleValue, setLoading} from '../slice/SignUpDataSlice';

export const GoogleSignUp = async (userData: RootState) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(LOGIN.GOOGLE_LOGIN, {
        id: userData.id,
        serverAuthCode: userData.serverAuthCode,
        name: userData.name,
        marketing_agreement: userData.marketing_agreement,
        personal_information_agreement: userData.personal_information_agreement,
        purpose_ids: userData.purpose_ids,
        location_ids: userData.location_ids,
        workspace_purpose_ids: userData.workspace_purpose_ids,
      });

      const jsonValue = JSON.stringify(response.data);
      dispatch(setGoogleValue(response.status));
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
