import AsyncStorage from '@react-native-async-storage/async-storage';

export const authHeader = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    const value = JSON.parse(user);
    // console.log('user', value.access_token);
    return value.access_token;
  } catch (e) {
    console.log('error', e);
  }
};
