import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import Button from '../../components/login/Button';
import COLORS from '../../../packages/colors';
import {ButtonBlock, LogoBlock} from './style';

interface IProps {
  navigation: undefined;
}

function OnboardingScreen(props: IProps) {
  const {navigation} = props;

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
        <Button text="카카오로 계속하기" backgroundColor={`${COLORS.FOUR}`} />
        <Button text="네이버로 계속하기" backgroundColor={`${COLORS.FOUR}`} />
      </ButtonBlock>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
