import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyScreenStackParamList} from './myScreenPropsType';
import MyPageScreen from './MyPageScreen/MyPageScreen';
import ScrapScreen from './ScrapScreen/ScrapScreen';
import ScrapDetailScreen from './ScrapDetailScreen/ScrapDetailScreen';
import EditProfileScreen from './EditProfileScreen/EditProfileScreen';
import MemberCancellationScreen from './MemberCancellationScreen/MemberCancellationScreen';
import MemberCancellationCompleteScreen from './MemberCancellationCompleteScreen/MemberCancellationCompleteScreen';
import MyServiceTermScreen from './MyServiceTermScreen/MyServiceTermScreen';

const MyScreenStack = createNativeStackNavigator<MyScreenStackParamList>();

const MyScreenNavigator = () => {
  return (
    <MyScreenStack.Navigator
      initialRouteName="MyPage"
      screenOptions={{headerShown: false}}>
      <MyScreenStack.Screen name="MyPage" component={MyPageScreen} />
      <MyScreenStack.Screen name="Scrap" component={ScrapScreen} />
      <MyScreenStack.Screen name="ScrapDetail" component={ScrapDetailScreen} />
      <MyScreenStack.Screen
        name="MyServiceTerm"
        component={MyServiceTermScreen}
      />
      <MyScreenStack.Screen name="EditProfile" component={EditProfileScreen} />
      <MyScreenStack.Screen
        name="MemberCancellation"
        component={MemberCancellationScreen}
      />
      <MyScreenStack.Screen
        name="MemberCancellationComplete"
        component={MemberCancellationCompleteScreen}
      />
    </MyScreenStack.Navigator>
  );
};

export default MyScreenNavigator;
