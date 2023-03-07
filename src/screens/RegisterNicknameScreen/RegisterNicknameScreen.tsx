import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import COLORS from '../../../packages/colors';
import AlertMessage from '../../components/login/AlertMessage/AlertMessage';
import {TextInput, TextInputContainer} from './style';
import {PostNickNameApi} from '../../redux/service/PostNicknameApi';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import Button from '../../components/login/NextButton/NextButton';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterNickname'>;
  route: RouteProp<IntroStackParamList, 'RegisterNickname'>;
}

function RegisterNicknameScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {data, error} = useSelector((state: RootState) => state.nickname);
  const [nickname, setNickname] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSaveNickname = async () => {
    error && setErrorMessage(error);
    const postData = {
      name: nickname,
    };
    PostNickNameApi(postData)(dispatch);
    setErrorMessage('');
  };

  useEffect(() => {
    error && setErrorMessage(error);
  }, [dispatch, setNickname, error]);

  useEffect(() => {
    setErrorMessage('');
  }, [dispatch, navigation]);

  useEffect(() => {
    data && navigation.navigate('RegisterRegion');
  }, [data, navigation]);

  return (
    <Wrapper>
      <OnboardingHeader text="닉네임 설정" goback={navigation.goBack} />
      <TextInputContainer>
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          placeholder="10자 이내 닉네임을 입력해주세요."
        />
        {errorMessage ? <AlertMessage message={errorMessage} /> : null}
      </TextInputContainer>
      <Button
        text="다음"
        backgroundColor={nickname ? COLORS.TWO : COLORS.GRAY_7}
        textColor={nickname ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSaveNickname}
      />
    </Wrapper>
  );
}

export default RegisterNicknameScreen;
