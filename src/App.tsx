import React from 'react';
import ServiceTermScreen from './screens/ServiceTermScreen/ServiceTermScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen/OnboardingScreen';
import RegisterRegionScreen from './screens/RegisterRegionScreen/RegisterRegionScreen';
import RegisterPurposeScreen from './screens/RegisterPurposeScreen/RegisterPurposeScreen';
import RegisterWorkSpaceScreen from './screens/RegisterWorkSpaceScreen/RegisterWorkSpaceScreen';
import MainScreen from './screens/MainScreen';
import RegisterNicknameScreen from './screens/RegisterNicknameScreen/RegisterNicknameScreen';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="ServiceTerm" component={ServiceTermScreen} />
        <Stack.Screen
          name="RegisterNickName"
          component={RegisterNicknameScreen}
        />
        <Stack.Screen name="RegisterRegion" component={RegisterRegionScreen} />
        <Stack.Screen
          name="RegisterPurpose"
          component={RegisterPurposeScreen}
        />
        <Stack.Screen
          name="RegisterWorkSpace"
          component={RegisterWorkSpaceScreen}
        />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
