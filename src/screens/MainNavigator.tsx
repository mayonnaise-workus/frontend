import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen/HomeScreen';
import MagazineScreen from './MagazineScreen/MagazineScreen';
import MyPageScreen from './MyPageScreen/MyPageScreen';
import {MainStackParamList} from './mainScreenPropsType';

const Main = createBottomTabNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Main.Navigator initialRouteName="Home">
      <Main.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#FFBA07' : '#8B95A1',
              }}
              source={require('../../assets/img/HomeIcon.png')}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#8B95A1',
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              홈
            </Text>
          ),
        }}
      />
      <Main.Screen
        name="Magazine"
        component={MagazineScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#FFBA07' : '#8B95A1',
              }}
              source={require('../../assets/img/MagazineIcon.png')}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#8B95A1',
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              매거진
            </Text>
          ),
        }}
      />
      <Main.Screen
        name="My"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? '#FFBA07' : '#8B95A1',
                width: 25,
                height: 25,
              }}
              source={require('../../assets/img/MyIcon.png')}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'black' : '#8B95A1',
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
