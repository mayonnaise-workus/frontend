import React, {useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import Header from '../../components/mypage/Header/Header';
import images from '../../../assets/images';
import COLORS from '../../../packages/colors';
import Button from '../../components/login/LoginButton/Button';
import EditProfileFeature from '../../components/mypage/EditProfileFeature/EditProfileFeature';
import {TextInput, Container, Profile, Title, Wrapper} from './style';
import {useSelector, useDispatch} from 'react-redux';
import {MemberApi} from '../../redux/service/MemberApi';
import {EditNicknameApi} from '../../redux/service/EditNicknameApi';
import {RootState} from '../../redux/store/store';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';

interface IProps {
  navigation: MyScreenStackNavigationProps<'EditProfile'>;
  route: RouteProp<MyScreenStackParamList, 'EditProfile'>;
}

interface EditName {
  editname: string;
}

function EditProfileScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<EditName>();

  const {data} = useSelector((state: RootState) => state.member);

  useEffect(() => {
    MemberApi()(dispatch);
  }, [dispatch]);

  const editname = watch('editname');

  const postData = {
    name: editname,
  };

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onPressMemberCancellation = () => {
    navigation.navigate('MemberCancellation');
  };

  const onPressLogout = () => {
    navigation.navigate('IntroNavigator');
  };

  async function handlePostEditName() {
    EditNicknameApi(postData)(dispatch);
  }

  return (
    <SafeAreaView>
      <Header onPress={onPressGoBack} title="계정 정보 수정" />
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
      <EditProfileFeature
        onPressMemberCancellation={onPressMemberCancellation}
        onPressLogout={onPressLogout}
      />
      <Button onPress={handleSubmit(handlePostEditName)} text="저장하기" />
    </SafeAreaView>
  );
}

export default EditProfileScreen;
