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
import {OnboardingApi} from '../../redux/service/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
  navigation: IntroStackNavigationProps<'OnBoarding'>;
  route: RouteProp<IntroStackParamList, 'OnBoarding'>;
}

function OnboardingScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.onboarding);
  const {kakao} = useSelector((state: RootState) => state.kakaologin);
  const {google} = useSelector((state: RootState) => state.googlelogin);
  const {apple} = useSelector((state: RootState) => state.applelogin);
  const [onboarding, setOnboarding] = useState([]);

  console.log('kakao', kakao);

  async function dd() {
    const value = await AsyncStorage.getItem('user');
    console.log('value2', value);
  }
  dd();

  useEffect(() => {
    OnboardingApi()(dispatch);
  }, [dispatch, kakao, google, apple]);

  console.log('data', data);

  useEffect(() => {
    setOnboarding(data);
  }, [data]);

  useEffect(() => {
    if (onboarding) {
      MemberOnboarding();
    }
  }, [onboarding]);

  console.log(onboarding);

  async function MemberOnboarding() {
    if ((kakao || google || apple) && onboarding) {
      if (!onboarding.terms_of_service_status) {
        navigation.navigate('ServiceTerm');
      } else if (!onboarding.nickname_status) {
        navigation.navigate('RegisterNickname');
      } else if (!onboarding.member_preference_region_status) {
        navigation.navigate('RegisterRegion');
      } else if (!onboarding.member_purpose_status) {
        navigation.navigate('RegisterPurpose');
      } else if (!onboarding.member_preference_workspace_status) {
        navigation.navigate('RegisterWorkspace');
      } else {
        navigation.navigate('MainNavigator');
      }
    } else if (
      kakao ||
      google ||
      (apple && !Object.keys(onboarding).includes('false'))
    ) {
      navigation.navigate('MainNavigator');
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
        <Text>SNS ???????????? ?????? ?????? ??????</Text>
        <Button
          onPress={() => {
            handleKakaoLogin();
          }}>
          <ButtonText>???????????? ???????????????</ButtonText>
        </Button>
        <Button
          onPress={() => {
            handleGoogleLogin();
          }}>
          <ButtonText>????????? ???????????????</ButtonText>
        </Button>
        {appleAuth.isSupported && (
          <Button
            onPress={() => {
              onAppleButtonPress();
            }}>
            <ButtonText>????????? ???????????????</ButtonText>
          </Button>
        )}
      </LoginContainer>
    </Wrapper>
  );
}

export default OnboardingScreen;
