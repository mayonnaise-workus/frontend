import React, {useEffect, useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Button from '../../components/login/LoginButton/Button';
import HeaderBackButton from '../../components/login/HeaderBackButton';
import Title from '../../components/login/Title';
import COLORS from '../../../packages/colors';
import ConditionsList from '../../components/login/ConditionsList';
import {ButtonView} from './style';

interface IProps {
  navigation: undefined;
}

const data = ['check1', 'check2', 'check3', 'check4', 'check5'];

function ServiceTermScreen(props: IProps) {
  const {navigation} = props;
  const [requiredCheck, setRequiredCheck] = useState([]);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const result = requiredCheck.filter(x => data.includes(x));
  const isAllChecked = result.length === 5;
  console.log(result);

  useEffect(() => {
    requiredCheck.includes('personal') ? setOption1(true) : setOption1(false);
    requiredCheck.includes('marketing') ? setOption2(true) : setOption2(false);
  }, [requiredCheck]);

  console.log(option1, option2);

  function onSubmit() {
    isAllChecked
      ? navigation.navigate('RegisterNickName')
      : Alert.alert('필수 약관을 동의해주세요');
  }

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
          backgroundColor={isAllChecked ? COLORS.TWO : COLORS.GRAY_7}
          textColor={isAllChecked ? COLORS.GRAY_1 : COLORS.GRAY_8}
          onPress={onSubmit}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default ServiceTermScreen;
