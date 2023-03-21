import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import COLORS from '../../../packages/colors';
import {TextInput, TextInputContainer} from './style';
import {connect, useDispatch, useSelector} from 'react-redux';
import Button from '../../components/login/NextButton/NextButton';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import {setName} from '../../redux/slice/SignUpDataSlice';
import {ValidationName} from '../../redux/service/ValidationName';
import {RootState} from '../../redux/store/store';
import AlertMessage from '../../components/login/AlertMessage/AlertMessage';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterNickname'>;
  route: RouteProp<IntroStackParamList, 'RegisterNickname'>;
}

function RegisterNicknameScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState<string>('');
  const {data} = useSelector((state: RootState) => state.validationname);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const validationname = nickname.length >= 1 && nickname.length <= 10;

  const postData = {
    name: nickname,
  };

  const handleSaveNickname = async () => {
    nickname && validationname
      ? ValidationName(postData)(dispatch)
      : setErrorMessage('닉네임은 10자 이내로 입력해주세요.');
  };

  useEffect(() => {
    data && data.status === 406 && setErrorMessage('중복되는 닉네임입니다.');
  }, [data]);

  useEffect(() => {
    if (data && data.status === 202) {
      dispatch(setName(nickname));
      navigation.navigate('RegisterRegion');
    }
    dispatch(setName(''));
  }, [data, dispatch, navigation]);

  useEffect(() => {
    setErrorMessage('');
  }, [dispatch, navigation, nickname]);

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
        backgroundColor={validationname ? COLORS.TWO : COLORS.GRAY_7}
        textColor={validationname ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSaveNickname}
      />
    </Wrapper>
  );
}

const mapStateToProps = (state: {signUp: {name: string}}) => ({
  name: state.signUp.name,
});

const mapDispatchToProps = {
  setName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterNicknameScreen);
