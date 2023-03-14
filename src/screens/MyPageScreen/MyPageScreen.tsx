import React from 'react';
import {RouteProp} from '@react-navigation/native';
import NickName from '../../components/mypage/Nickname/NickName';
import ScrapButton from '../../components/mypage/ScrapButton/ScrapButton';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import MainHeader from '../../components/common/MainHeader';
import {
  Container,
  ContentContainer,
  ButtonContainer,
  EmptyContainer,
} from './style';
import Button from '../../components/mypage/Button/Button';
import {Linking} from 'react-native';
import {manualUrl} from '../../data';

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

  const serviceTermPress = () => {
    navigation.navigate('MyServiceTerm');
  };

  const manualPress = () => {
    Linking.openURL(`${manualUrl}`);
  };

  return (
    <Container>
      <MainHeader />
      <ContentContainer>
        <NickName onPress={nicknamePress} />
        <ScrapButton onPress={scrapPress} />
        <ButtonContainer>
          <Button onPress={serviceTermPress} title="이용 약관" />
          <Button onPress={manualPress} title="이용 방법" />
        </ButtonContainer>
        <EmptyContainer />
      </ContentContainer>
    </Container>
  );
}
export default MyPageScreen;
