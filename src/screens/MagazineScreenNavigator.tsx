import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MagazineScreenStackParamList} from './magazineScreenPropsType';
import MagazineMainScreen from './MagazineScreen/MagazineMainScreen/MagazineMainScreen';
import MagazineDetailScreen from './MagazineScreen/MagazineDetailScreen/MagazineDetailScreen';

const MagazineScreenStack =
  createNativeStackNavigator<MagazineScreenStackParamList>();

const MagazineScreenNavigator = () => {
  return (
    <MagazineScreenStack.Navigator
      initialRouteName="MagazineMain"
      screenOptions={{headerShown: false}}>
      <MagazineScreenStack.Screen
        name="MagazineMain"
        component={MagazineMainScreen}
      />
      <MagazineScreenStack.Screen
        name="MagazineDetail"
        component={MagazineDetailScreen}
      />
    </MagazineScreenStack.Navigator>
  );
};

export default MagazineScreenNavigator;
