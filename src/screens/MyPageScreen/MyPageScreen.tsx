import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Button from '../../components/mypage/Button/Button';
import NickName from '../../components/mypage/Nickname/NickName';
import ScrapButton from '../../components/mypage/ScrapButton/ScrapButton';
import {Wrapper} from './style';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MyPage'>;
  route: RouteProp<MyScreenStackParamList, 'MyPage'>;
}

function MyPageScreen({navigation}: IProps) {
  const nicknamePress = () => {
    navigation.navigate('EditProfile');
  };

  const scrapPress = () => {
    navigation.navigate('Scrap');
  };

  return (
    <SafeAreaView>
      <NickName onPress={nicknamePress} />
      <ScrapButton onPress={scrapPress} />
      <Wrapper>
        <Button title="알림 설정" />
        <Button title="이용 약관" />
        <Button title="이용 방법" />
      </Wrapper>
    </SafeAreaView>
  );
}
export default MyPageScreen;
