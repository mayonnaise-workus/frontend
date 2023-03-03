import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import Title from '../../components/login/Title/Title';
import COLORS from '../../../packages/colors';
import ConditionsList from '../../components/login/ConditionsList/ConditionsList';
import {ButtonView} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {ServiceTermApi} from '../../redux/service/ServiceTermApi';
import {RootState} from '../../redux/store/store';
import Button from '../../components/login/NextButton/NextButton';

interface IProps {
  navigation: undefined;
}

function ServiceTermScreen(props: IProps) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const check = ['check1', 'check2', 'check3', 'check4', 'check5'];
  const [requiredCheck, setRequiredCheck] = useState<string[]>([]);
  const [option1, setOption1] = useState<boolean>(false);
  const [option2, setOption2] = useState<boolean>(false);
  const result = requiredCheck.filter(x => check.includes(x));
  const isAllChecked = result.length === 5;
  const {data} = useSelector((state: RootState) => state.serviceterm);

  useEffect(() => {
    requiredCheck.includes('personal') ? setOption1(true) : setOption1(false);
    requiredCheck.includes('marketing') ? setOption2(true) : setOption2(false);
  }, [requiredCheck]);

  const postData = {
    marketing_agreement: option1,
    personal_information_agreement: option2,
  };

  const handleSubmit = async () => {
    isAllChecked
      ? ServiceTermApi(postData)(dispatch)
      : Alert.alert('필수 약관을 체크해주세요!');
  };

  useEffect(() => {
    data && navigation.navigate('RegisterNickName');
  }, [data, navigation]);

  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <Title title="서비스 이용약관 동의" />
      <ConditionsList
        requiredCheck={requiredCheck}
        setRequiredCheck={setRequiredCheck}
      />
      <ButtonView>
        <Button
          text="동의하고 가입하기"
          backgroundColor={isAllChecked ? `${COLORS.TWO}` : `${COLORS.GRAY_7}`}
          textColor={isAllChecked ? `${COLORS.GRAY_1}` : `${COLORS.GRAY_8}`}
          onPress={handleSubmit}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default ServiceTermScreen;
