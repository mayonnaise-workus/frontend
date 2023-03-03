import React, {useEffect} from 'react';
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
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '338856065017-ho97q8chva20ol5fcmk6228at381u8ib.apps.googleusercontent.com',
    });
  };

  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
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
    </Provider>
  );
};

export default App;
