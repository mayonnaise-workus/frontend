import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import IntroNavigator from './screens/IntroNavigator';
import MainNavigator from './screens/MainNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID} from '@env';
import SplashScreen from 'react-native-splash-screen';
import {authHeader} from './redux/service/auth-header';

export type RootStackParamList = {
  default: undefined;
  IntroNavigator: undefined;
  MainNavigator: undefined;
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default',
> = NativeStackNavigationProp<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    const getHeader = async () => {
      const header = await authHeader();
      setUser(header);
    };
    getHeader();
  });
  console.log('user', user);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      iosClientId: `${GOOGLE_IOS_CLIENT_ID}`,
      webClientId: `${GOOGLE_WEB_CLIENT_ID}`,
      offlineAccess: true,
    });
  };

  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              user === undefined ? 'IntroNavigator' : 'MainNavigator'
            }>
            <Stack.Screen
              name="IntroNavigator"
              component={IntroNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainNavigator"
              component={MainNavigator}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
