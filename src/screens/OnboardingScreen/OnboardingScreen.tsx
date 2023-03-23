import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {KakaoLogin} from '../../redux/service/KakaoLogin';
import images from '../../../assets/images';
import {RootState} from '../../redux/store/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import appleAuth from '@invertase/react-native-apple-authentication';
import {GoogleLogin} from '../../redux/service/GoogleLogin';
import {AppleLogin} from '../../redux/service/AppleLogin';
import {PreferenceApi} from '../../redux/service/PreferenceApi';
import {Pressable} from 'react-native';

interface IProps {
  navigation: IntroStackNavigationProps<'OnBoarding'>;
  route: RouteProp<IntroStackParamList, 'OnBoarding'>;
}

function OnboardingScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.preference);
  const {kakao} = useSelector((state: RootState) => state.kakaologin);
  const {google} = useSelector((state: RootState) => state.googlelogin);
  const {apple} = useSelector((state: RootState) => state.applelogin);
  const [preference, setPreference] = useState<string[]>([]);

  useEffect(() => {
    PreferenceApi()(dispatch);
  }, [dispatch, kakao, google, apple]);

  useEffect(() => {
    if (data) {
      setPreference(data);
    }
  }, [data]);

  useEffect(() => {
    if (preference) {
      MemberOnboarding();
    }
  }, [preference]);

  async function MemberOnboarding() {
    if (kakao || google || apple) {
      if (preference.preference_workspace_purposes.length === 0) {
        navigation.navigate('ServiceTerm');
      } else {
        navigation.navigate('MainNavigator');
      }
    } else {
    }
  }

  const handleKakaoLogin = async () => {
    const result = await login();

    const postData = {
      access_token: result.accessToken,
      refresh_token: result.refreshToken,
      expires_in:
        new Date(Date.parse(`${result.refreshTokenExpiresAt}`)).getTime() /
        1000,
    };
    await KakaoLogin(postData)(dispatch);
    await MemberOnboarding();
  };

  const handleGoogleLogin = async () => {
    const res = await GoogleSignin.signIn();

    const postData = {
      id: res.user.id,
      serverAuthCode: res.serverAuthCode,
    };
    await GoogleLogin(postData)(dispatch);
    await MemberOnboarding();
  };
  const guestPress = async () => {
    navigation.navigate('MainNavigator');
  };

  async function onAppleButtonPress() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const {authorizationCode, user} = appleAuthRequestResponse;

    const postData = {
      authorizationCode: authorizationCode,
      user: user,
    };
    await AppleLogin(postData)(dispatch);
    await MemberOnboarding();
  }

  return (
    <Wrapper>
      <LogoContainer>
        <Logo source={images.LOGO_BLACK} />
      </LogoContainer>
      <LoginContainer>
        <Pressable
          onPress={() => {
            guestPress();
          }}>
          <Text>로그인없이 이용하기</Text>
        </Pressable>
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
