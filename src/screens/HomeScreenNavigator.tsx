import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreenStackParamList} from './homeScreenPropsType';
import Home from './HomeScreen/HomeMainScreen/HomeScreen';
import HomeDetail from './HomeScreen/HomeDetailScreen/HomeDetailScreen';

const HomeScreenStack = createNativeStackNavigator<HomeScreenStackParamList>();

const HomeScreenNavigator = () => {
  return (
    <HomeScreenStack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{headerShown: false}}>
      <HomeScreenStack.Screen name="HomeMain" component={Home} />
      <HomeScreenStack.Screen name="HomeDetail" component={HomeDetail} />
    </HomeScreenStack.Navigator>
  );
};

export default HomeScreenNavigator;
