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
  Wrapper,
  Logo,
  Text,
} from './style';
import images from '../../../assets/images';

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

  return (
    <Container>
      <MainHeader />
      <ContentContainer>
        <NickName onPress={nicknamePress} />
        <ScrapButton onPress={scrapPress} />
        <ButtonContainer>
          <Wrapper onPress={serviceTermPress}>
            <Text>이용 약관</Text>
            <Logo source={images.RIGHT_ICON} />
          </Wrapper>
        </ButtonContainer>
        <EmptyContainer />
      </ContentContainer>
    </Container>
  );
}
export default MyPageScreen;
