import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './OnboardingScreen/OnboardingScreen';
import ServiceTermScreen from './ServiceTermScreen/ServiceTermScreen';
import RegisterNicknameScreen from './RegisterNicknameScreen/RegisterNicknameScreen';
import RegisterRegionScreen from './RegisterRegionScreen/RegisterRegionScreen';
import RegisterPurposeScreen from './RegisterPurposeScreen/RegisterPurposeScreen';
import RegisterWorkSpaceScreen from './RegisterWorkSpaceScreen/RegisterWorkSpaceScreen';
import ServiceTermDetail from './ServiceTermScreen/ServiceTermDetail';
import {IntroStackParamList} from './introScreenPropsType';

const IntroStack = createNativeStackNavigator<IntroStackParamList>();

const IntroNavigator = () => {
  return (
    <IntroStack.Navigator screenOptions={{headerShown: false}}>
      <IntroStack.Screen name="OnBoarding" component={OnboardingScreen} />
      <IntroStack.Screen name="ServiceTerm" component={ServiceTermScreen} />
      <IntroStack.Screen
        name="ServiceTermDetail"
        component={ServiceTermDetail}
      />
      <IntroStack.Screen
        name="RegisterNickname"
        component={RegisterNicknameScreen}
      />
      <IntroStack.Screen
        name="RegisterRegion"
        component={RegisterRegionScreen}
      />
      <IntroStack.Screen
        name="RegisterPurpose"
        component={RegisterPurposeScreen}
      />
      <IntroStack.Screen
        name="RegisterWorkspace"
        component={RegisterWorkSpaceScreen}
      />
    </IntroStack.Navigator>
  );
};

export default IntroNavigator;
