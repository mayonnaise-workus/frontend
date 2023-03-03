import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import IntroNavigator from './screens/IntroNavigator';
import MainNavigator from './screens/MainNavigator';

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
  return (
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
  );
};

export default App;
