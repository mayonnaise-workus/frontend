import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import Header from '../../components/mypage/Header/Header';
import images from '../../../assets/images';
import COLORS from '../../../packages/colors';
import Button from '../../components/login/LoginButton/Button';
import EditProfileFeature from '../../components/mypage/EditProfileFeature/EditProfileFeature';
import {
  TextInput,
  ButtonView,
  Container,
  Profile,
  Title,
  Wrapper,
} from './style';
import {useSelector, useDispatch} from 'react-redux';
import {MemberApi} from '../../redux/service/MemberApi';
import {EditNicknameApi} from '../../redux/service/EditNicknameApi';

interface IProps {
  navigation: undefined;
}

interface EditName {
  editname: string;
}

function EditProfileScreen(props: IProps) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<EditName>();

  const {loading, error, data} = useSelector((state: any) => state.member);

  useEffect(() => {
    dispatch(MemberApi());
  }, [dispatch]);

  const editname = watch('editname');

  const postData = {
    name: editname,
  };

  async function handlePostEditName() {
    dispatch(EditNicknameApi(postData));
  }

  return (
    <SafeAreaView>
      <Header navigation={navigation} title="계정 정보 수정" />
      <Wrapper>
        <Profile source={images.PROFILE_GRAY} />
      </Wrapper>
      <Container>
        <Title>닉네임 수정</Title>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 10,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              style={{
                backgroundColor: COLORS.GRAY_8,
              }}
              placeholderTextColor={COLORS.GRAY_5}
            />
          )}
          name="editname"
        />
      </Container>
      <EditProfileFeature navigation={navigation} />
      <ButtonView>
        <Button
          onPress={handleSubmit(handlePostEditName)}
          text="저장하기"
          backgroundColor={COLORS.TWO}
          textColor={COLORS.GRAY_2}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default EditProfileScreen;
