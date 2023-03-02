import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import Button from '../../components/login/LoginButton/Button';
import {ButtonBlock, LogoBlock} from './style';
import {login} from '@react-native-seoul/kakao-login';
import {useDispatch, useSelector} from 'react-redux';
import {LoginApi} from '../../redux/service/LoginApi';
import images from '../../../assets/images';
import {RootState} from '../../redux/store/store';

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
      expires_int:
        new Date(Date.parse(`${result.refreshTokenExpiresAt}`)).getTime() /
        1000,
    };
    LoginApi(postData)(dispatch);
  };

  useEffect(() => {
    data && navigation.navigate('ServiceTerm');
  }, [data, navigation]);

  return (
    <SafeAreaView>
      <LogoBlock>
        <Image source={images.LOGO_BLACK} />
      </LogoBlock>
      <ButtonBlock>
        <Button
          onPress={() => navigation.navigate('ServiceTerm')}
          text="구글로 계속하기"
        />
        <Button text="카카오로 계속하기" onPress={handleKakaoLogin} />
        <Button text="네이버로 계속하기" />
      </ButtonBlock>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
