import AsyncStorage from '@react-native-async-storage/async-storage';

export const authHeader = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    const value = JSON.parse(user);
    return value.access_token;
  } catch (e) {
  }
};
