import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import Title from '../../components/login/Title/Title';
import {Controller, useForm} from 'react-hook-form';
import COLORS from '../../../packages/colors';
import Button from '../../components/login/LoginButton/Button';
import AlertMessage from '../../components/login/AlertMessage/AlertMessage';
import {ButtonView, TextInput} from './style';

interface IProps {
  navigation: undefined;
}

interface FormData {
  nickname: string;
}

function RegisterNicknameScreen(props: IProps) {
  const {navigation} = props;
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<FormData>();

  const nickname = watch('nickname');

  const handleSaveNickname = (data: FormData) => {
    navigation.navigate('RegisterRegion');
  };

  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <Title title="닉네임 설정" />
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 10,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="10자 이내 닉네임 설정"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            style={{
              backgroundColor: COLORS.GRAY_8,
            }}
            placeholderTextColor={COLORS.GRAY_5}
          />
        )}
        name="nickname"
      />
      {errors.nickname?.type === 'required' && (
        <AlertMessage message="닉네임을 입력해주세요" />
      )}

      {errors.nickname?.type === 'maxLength' && (
        <AlertMessage message="10자 이내로 입력해주세요" />
      )}
      <ButtonView>
        <Button
          text="다음"
          backgroundColor={nickname ? COLORS.TWO : COLORS.GRAY_7}
          textColor={nickname ? COLORS.GRAY_2 : COLORS.GRAY_8}
          onPress={handleSubmit(handleSaveNickname)}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default RegisterNicknameScreen;