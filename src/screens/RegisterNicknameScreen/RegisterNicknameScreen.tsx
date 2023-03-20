import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import COLORS from '../../../packages/colors';
import {TextInput, TextInputContainer} from './style';
import {connect, useDispatch} from 'react-redux';
import Button from '../../components/login/NextButton/NextButton';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import {setName} from '../../redux/slice/SignUpDataSlice';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterNickname'>;
  route: RouteProp<IntroStackParamList, 'RegisterNickname'>;
}

function RegisterNicknameScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState<string>('');

  const handleSaveNickname = async () => {
    if (nickname) {
      dispatch(setName(nickname));
      navigation.navigate('RegisterRegion');
    }
  };

  return (
    <Wrapper>
      <OnboardingHeader text="닉네임 설정" goback={navigation.goBack} />
      <TextInputContainer>
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          placeholder="10자 이내 닉네임을 입력해주세요."
        />
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
