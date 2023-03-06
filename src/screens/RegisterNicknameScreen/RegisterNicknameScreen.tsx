import React, {useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
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

interface FormData {
  nickname: string;
}

function RegisterNicknameScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.nickname);

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<FormData>();

  const nickname = watch('nickname');

  const postData = {
    name: nickname,
  };

  const handleSaveNickname = async () => {
    PostNickNameApi(postData)(dispatch);
  };

  useEffect(() => {
    data && navigation.navigate('RegisterRegion');
  }, [data, navigation]);

  return (
    <Wrapper>
      <OnboardingHeader text="닉네임 설정" goback={navigation.goBack} />
      <TextInputContainer>
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
      </TextInputContainer>
      <Button
        text="다음"
        backgroundColor={nickname ? COLORS.TWO : COLORS.GRAY_7}
        textColor={nickname ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSubmit(handleSaveNickname)}
      />
    </Wrapper>
  );
}

export default RegisterNicknameScreen;
