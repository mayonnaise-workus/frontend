import React from 'react';
import {RouteProp} from '@react-navigation/native';
import Button from '../../components/mypage/Button/Button';
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
    <Container>
      <MainHeader />
      <ContentContainer>
        <NickName onPress={nicknamePress} />
        <ScrapButton onPress={scrapPress} />
        <ButtonContainer>
          <Button title="알림 설정" />
          <Button title="이용 약관" />
          <Button title="이용 방법" />
        </ButtonContainer>
        <EmptyContainer />
      </ContentContainer>
    </Container>
  );
}
export default MyPageScreen;
