import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Alert} from 'react-native';
import {ServiceTermContainer} from './style';
import {connect, useDispatch} from 'react-redux';
import Button from '../../components/login/NextButton/NextButton';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import ServiceTerm from './ServiceTerm';
import COLORS from '../../../packages/colors';
import {
  setMarketing_agreement,
  setPersonal_information_agreement,
} from '../../redux/slice/SignUpDataSlice';

interface IProps {
  navigation: IntroStackNavigationProps<'ServiceTerm'>;
  route: RouteProp<IntroStackParamList, 'ServiceTerm'>;
}

function ServiceTermScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const [agreementCheck, setAgreementCheck] = useState<string[]>([]);
  const [obligationCheck, setObligationCheck] = useState<string[]>([]);
  const isAllChecked = obligationCheck.length === 2;

  const handleSubmit = async () => {
    if (isAllChecked) {
      dispatch(setMarketing_agreement(false));
      dispatch(setPersonal_information_agreement(false));
      navigation.navigate('RegisterNickname');
    } else {
      Alert.alert('필수 약관을 체크해주세요!');
    }
  };

  return (
    <Wrapper>
      <OnboardingHeader text="서비스 이용 약관" goback={navigation.goBack} />
      <ServiceTermContainer>
        <ServiceTerm
          agreementCheck={agreementCheck}
          setAgreementCheck={setAgreementCheck}
          obligationCheck={obligationCheck}
          setObligationCheck={setObligationCheck}
          navigate={navigation.navigate}
        />
      </ServiceTermContainer>
      <Button
        text="동의하고 가입하기"
        backgroundColor={isAllChecked ? COLORS.TWO : COLORS.GRAY_7}
        textColor={isAllChecked ? COLORS.GRAY_1 : COLORS.GRAY_8}
        onPress={handleSubmit}
      />
    </Wrapper>
  );
}

const mapStateToProps = (state: {
  signUp: {
    marketing_agreement: boolean;
    personal_information_agreement: boolean;
  };
}) => ({
  marketing_agreement: state.signUp.marketing_agreement,
  personal_information_agreement: state.signUp.personal_information_agreement,
});

const mapDispatchToProps = {
  setMarketing_agreement,
  setPersonal_information_agreement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTermScreen);
