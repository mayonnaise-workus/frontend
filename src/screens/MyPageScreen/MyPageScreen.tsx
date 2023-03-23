import React, {useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import NickName from '../../components/mypage/Nickname/NickName';
import ScrapButton from '../../components/mypage/ScrapButton/ScrapButton';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import {
  Container,
  ContentContainer,
  ButtonContainer,
  EmptyContainer,
} from './style';
import Button from '../../components/mypage/Button/Button';
import {Alert, Linking} from 'react-native';
import {manualUrl} from '../../data';
import SubHeader from '../../components/common/SubHeader';
import {authHeader} from '../../redux/service/auth-header';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MyPage'>;
  route: RouteProp<MyScreenStackParamList, 'MyPage'>;
}

function MyPageScreen({navigation}: IProps) {
  useEffect(() => {
    const checkLogin = async () => {
      const header = await authHeader();
      header === undefined &&
        Alert.alert(
          '',
          '로그인 후 이용해주세요!',
          [
            {
              text: '예',
              onPress: () => {
                navigation.navigate('OnBoarding');
              },
              style: 'destructive',
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {},
          },
        );
    };
    checkLogin();
  }, [navigation]);

  const nicknamePress = () => {
    navigation.navigate('EditProfile');
  };

  const scrapPress = () => {
    navigation.navigate('Scrap');
  };

  const serviceTermPress = () => {
    navigation.navigate('MyServiceTerm');
  };

  const regionPress = () => {
    navigation.navigate('RegionSetting');
  };

  const manualPress = () => {
    Linking.openURL(`${manualUrl}`);
  };

  return (
    <Container>
      <SubHeader />
      <ContentContainer>
        <NickName onPress={nicknamePress} />
        <ScrapButton onPress={scrapPress} />
        <ButtonContainer>
          <Button onPress={regionPress} title="지역 설정" />
          <Button onPress={serviceTermPress} title="이용 약관" />
          <Button onPress={manualPress} title="이용 방법" />
        </ButtonContainer>
        <EmptyContainer />
      </ContentContainer>
    </Container>
  );
}
export default MyPageScreen;
