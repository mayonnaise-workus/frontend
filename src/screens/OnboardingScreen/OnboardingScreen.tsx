import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import Button from '../../components/login/LoginButton/Button';
import {ButtonBlock, LogoBlock} from './style';
import {login} from '@react-native-seoul/kakao-login';
import {useDispatch, useSelector} from 'react-redux';
import {LoginApi} from '../../redux/service/LoginApi';
import images from '../../../assets/images';
import {RootState} from '../../redux/store/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';

interface IProps {
  navigation: undefined;
}

function OnboardingScreen(props: IProps) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {data} = useSelector((state: RootState) => state.login);

  const handleKakaoLogin = async () => {
    const result = await login();

    const postData = {
      access_token: result.accessToken,
      refresh_token: result.refreshToken,
      expires_in:
        new Date(Date.parse(`${result.refreshTokenExpiresAt}`)).getTime() /
        1000,
    };
    LoginApi(postData)(dispatch);
  };

  const siginInWithGoogle = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('ServiceTerm');
    } catch (err) {
      console.error('login err', err);
    }
  };

  async function onAppleButtonPress() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const {identityToken, authorizationCode, user} = appleAuthRequestResponse;
  }

  useEffect(() => {
    data && navigation.navigate('ServiceTerm');
  }, [data, navigation]);

  return (
    <SafeAreaView>
      <LogoBlock>
        <Image source={images.LOGO_BLACK} />
      </LogoBlock>
      <ButtonBlock>
        <Button text="구글로 계속하기" onPress={siginInWithGoogle} />
        <Button text="카카오로 계속하기" onPress={handleKakaoLogin} />
        <Button text="애플로 계속하기" onPress={onAppleButtonPress} />
      </ButtonBlock>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
