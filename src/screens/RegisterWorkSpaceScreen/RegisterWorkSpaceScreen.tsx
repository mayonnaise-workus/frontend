import React, {useEffect, useState} from 'react';
import {Dimensions, Alert} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Description from '../../components/login/Description/Description';
import COLORS from '../../../packages/colors';
import {workspace} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import {EmptyView, ScrollView} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Button from '../../components/login/NextButton/NextButton';

import {KakaoSignUp} from '../../redux/service/KakaoSignUp';
import {setWorkspace_purpose_ids} from '../../redux/slice/SignUpDataSlice';
import {GoogleSignUp} from '../../redux/service/GoogleSignUp';
import {AppleSignUp} from '../../redux/service/AppleSignUp';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterWorkspace'>;
  route: RouteProp<IntroStackParamList, 'RegisterWorkspace'>;
}

function RegisterWorkSpaceScreen({navigation}: IProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const check = checkList.length >= 1 && checkList.length <= 3;
  const dispatch = useDispatch();

  const signUpData = useSelector((state: RootState) => state.signUp);

  const workspaceCheck = async () => {
    if (check) {
      dispatch(setWorkspace_purpose_ids(checkList));
    } else {
      Alert.alert('최대 3개까지 선택할 수 있습니다');
    }
  };
  const handleSubmit = async () => {
    workspaceCheck();
    signUpData.kakao && (await KakaoSignUp(signUpData))(dispatch);
    signUpData.google && (await GoogleSignUp(signUpData))(dispatch);
    signUpData.apple && (await AppleSignUp(signUpData))(dispatch);
  };
  console.log(signUpData.kakaoValue);
  useEffect(() => {
    (signUpData.kakaoValue === 200 ||
      signUpData.appleValue === 200 ||
      signUpData.googleValue === 200) &&
      navigation.navigate('MainNavigator');
  }, [
    navigation,
    signUpData.appleValue,
    signUpData.googleValue,
    signUpData.kakaoValue,
  ]);

  return (
    <Wrapper>
      <OnboardingHeader
        text="어떤 워크 스페이스를 선호하나요?"
        goback={navigation.goBack}
      />
      <Description description="최대 3개까지 선택할 수 있습니다." />
      <ScrollView
        contentContainerStyle={{alignItems: 'center', gap: 12}}
        showsVerticalScrollIndicator>
        {workspace.slice(1).map(item => {
          return (
            <RegisterButton
              key={item.id}
              id={item.id}
              title={item.title}
              width={Dimensions.get('window').width - 40}
              height={54}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          );
        })}
        <EmptyView />
        <Button
          text="시작하기"
          backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
          textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
          onPress={handleSubmit}
        />
      </ScrollView>
    </Wrapper>
  );
}

export default RegisterWorkSpaceScreen;
