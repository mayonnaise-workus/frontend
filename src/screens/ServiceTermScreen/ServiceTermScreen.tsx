import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Alert} from 'react-native';
import {ServiceTermContainer} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {ServiceTermApi} from '../../redux/service/ServiceTermApi';
import {RootState} from '../../redux/store/store';
import Button from '../../components/login/NextButton/NextButton';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import ServiceTerm from './ServiceTerm';
import COLORS from '../../../packages/colors';

interface IProps {
  navigation: IntroStackNavigationProps<'ServiceTerm'>;
  route: RouteProp<IntroStackParamList, 'ServiceTerm'>;
}

function ServiceTermScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const [agreementCheck, setAgreementCheck] = useState<string[]>([]);
  const [obligationCheck, setObligationCheck] = useState<string[]>([]);
  const isAllChecked = obligationCheck.length === 2;

  const {data} = useSelector((state: RootState) => state.serviceterm);

  const postData = {
    marketing_agreement: false,
    personal_information_agreement: false,
  };

  const handleSubmit = async () => {
    isAllChecked
      ? ServiceTermApi(postData)(dispatch)
      : Alert.alert('필수 약관을 체크해주세요!');
  };

  useEffect(() => {
    data && navigation.navigate('RegisterNickname');
  }, [data, navigation]);

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

export default ServiceTermScreen;
