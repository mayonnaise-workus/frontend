import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import Button from '../../components/login/LoginButton/Button';
import COLORS from '../../../packages/colors';
import {ButtonBlock, LogoBlock} from './style';
import {login} from '@react-native-seoul/kakao-login';
import {useDispatch, useSelector} from 'react-redux';
import {LoginApi} from '../../redux/service/LoginApi';

interface IProps {
  navigation: undefined;
}

function OnboardingScreen(props: IProps) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {loading, error, data} = useSelector((state: any) => state.login);

  const handleKakaoLogin = async () => {
    const result = await login();

    const postData = {
      access_token: result.accessToken,
      refresh_token: result.refreshToken,
      expires_int:
        new Date(Date.parse(result.refreshTokenExpiresAt)).getTime() / 1000,
    };
    dispatch(LoginApi(postData));
  };

  useEffect(() => {
    data && navigation.navigate('ServiceTerm');
  }, [data]);

  return (
    <SafeAreaView>
      <LogoBlock>
        <Image
          source={require('/Users/sein/Desktop/frontend/assets/logo_black.png')}
        />
      </LogoBlock>
      <ButtonBlock>
        <Button
          textColor={COLORS.GRAY_1}
          onPress={() => navigation.navigate('ServiceTerm')}
          text="구글로 계속하기"
          backgroundColor={`${COLORS.FOUR}`}
        />
        <Button
          text="카카오로 계속하기"
          backgroundColor={`${COLORS.FOUR}`}
          onPress={handleKakaoLogin}
        />
        <Button text="네이버로 계속하기" backgroundColor={`${COLORS.FOUR}`} />
      </ButtonBlock>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
