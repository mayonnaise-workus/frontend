import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  LoginContainer,
  Logo,
  LogoContainer,
  Button,
  ButtonText,
  Text,
} from './style';
import {login} from '@react-native-seoul/kakao-login';
import {useDispatch} from 'react-redux';
import images from '../../../assets/images';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import appleAuth from '@invertase/react-native-apple-authentication';

import {
  setAccess_token,
  setApple,
  setAuthorizationCode,
  setExpires_in,
  setGoogle,
  setId,
  setKakao,
  setRefresh_token,
  setServerAuthCode,
  setUser,
} from '../../redux/slice/SignUpDataSlice';

interface IProps {
  navigation: IntroStackNavigationProps<'OnBoarding'>;
  route: RouteProp<IntroStackParamList, 'OnBoarding'>;
}

function OnboardingScreen({navigation}: IProps) {
  const dispatch = useDispatch();

  const handleKakaoLogin = async () => {
    const result = await login();

    dispatch(setKakao(true));
    dispatch(setAccess_token(result.accessToken));
    dispatch(setRefresh_token(result.refreshToken));
    dispatch(
      setExpires_in(
        new Date(Date.parse(`${result.refreshTokenExpiresAt}`)).getTime() /
          1000,
      ),
    );
    navigation.navigate('ServiceTerm');
  };

  const handleGoogleLogin = async () => {
    const res = await GoogleSignin.signIn();

    dispatch(setGoogle(true));
    dispatch(setId(res.user.id));
    dispatch(setServerAuthCode(res.serverAuthCode));
    navigation.navigate('ServiceTerm');
  };

  async function onAppleButtonPress() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const {authorizationCode, user} = appleAuthRequestResponse;

    dispatch(setApple(true));
    dispatch(setAuthorizationCode(authorizationCode));
    dispatch(setUser(user));
    navigation.navigate('ServiceTerm');
  }

  return (
    <Wrapper>
      <LogoContainer>
        <Logo source={images.LOGO_BLACK} />
      </LogoContainer>
      <LoginContainer>
        <Text>SNS 계정으로 간편 가입 하기</Text>
        <Button
          onPress={() => {
            handleKakaoLogin();
          }}>
          <ButtonText>카카오로 로그인하기</ButtonText>
        </Button>
        <Button
          onPress={() => {
            handleGoogleLogin();
          }}>
          <ButtonText>구글로 로그인하기</ButtonText>
        </Button>
        {appleAuth.isSupported && (
          <Button
            onPress={() => {
              onAppleButtonPress();
            }}>
            <ButtonText>애플로 로그인하기</ButtonText>
          </Button>
        )}
      </LoginContainer>
    </Wrapper>
  );
}

export default OnboardingScreen;
