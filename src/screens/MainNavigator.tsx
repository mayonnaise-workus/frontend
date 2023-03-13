import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './HomeScreenNavigator';
import MagazineScreenNavigator from './MagazineScreenNavigator';
import MyScreenNavigator from './MyScreenNavigator';
import {MainStackParamList} from './mainScreenPropsType';
import images from '../../assets/images';
import COLORS from '../../packages/colors';

const Main = createBottomTabNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Main.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Main.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? COLORS.ONE : COLORS.GRAY_5,
              }}
              source={images.LOGO_HOME}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : COLORS.GRAY_5,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              홈
            </Text>
          ),
        }}
      />
      <Main.Screen
        name="Magazine"
        component={MagazineScreenNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? COLORS.ONE : COLORS.GRAY_5,
              }}
              source={images.LOGO_MAGAZINE}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : COLORS.GRAY_5,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              매거진
            </Text>
          ),
        }}
      />
      <Main.Screen
        name="My"
        component={MyScreenNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? COLORS.ONE : COLORS.GRAY_5,
                width: 25,
                height: 25,
              }}
              source={images.LOGO_MY}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : COLORS.GRAY_5,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              MY
            </Text>
          ),
        }}
      />
    </Main.Navigator>
  );
}

export default MainNavigator;
