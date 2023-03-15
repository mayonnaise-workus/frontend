import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import Header from '../../components/mypage/Header/Header';
import images from '../../../assets/images';
import Button from '../../components/login/NextButton/NextButton';
import EditProfileFeature from '../../components/mypage/EditProfileFeature/EditProfileFeature';
import {
  TextInput,
  Container,
  Profile,
  Title,
  ProfileContainer,
  NicknameChangeContainer,
  EmptyView,
} from './style';
import {useSelector, useDispatch} from 'react-redux';
import {MemberApi} from '../../redux/service/MemberApi';
import {EditNicknameApi} from '../../redux/service/EditNicknameApi';
import {RootState} from '../../redux/store/store';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import AlertMessage from '../../components/login/AlertMessage/AlertMessage';
import COLORS from '../../../packages/colors';

interface IProps {
  navigation: MyScreenStackNavigationProps<'EditProfile'>;
  route: RouteProp<MyScreenStackParamList, 'EditProfile'>;
}

function EditProfileScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {member} = useSelector((state: RootState) => state.member);
  const {userError, user} = useSelector(
    (state: RootState) => state.editNickname,
  );
  const [newNickname, setNewNickname] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onPressMemberCancellation = () => {
    navigation.navigate('MemberCancellation');
  };

  const onPressLogout = () => {
    navigation.navigate('OnBoarding');
  };

  async function handlePostEditName() {
    userError && setErrorMessage(userError);
    const postData = {
      name: newNickname,
    };
    await EditNicknameApi(postData)(dispatch);
    const newNickName = await MemberApi()(dispatch);
    if (newNickName?.name) {
      setNewNickname(newNickName.name);
    }
  }

  useEffect(() => {
    if (user) {
      setErrorMessage('');
    }
  }, [user]);

  useEffect(() => {
    if (member) {
      setNewNickname(member.name);
    }
  }, [member]);

  useEffect(() => {
    if (userError) {
      setErrorMessage(userError);
    }
  }, [userError]);

  useEffect(() => {
    setErrorMessage('');
  }, [dispatch, navigation]);

  return (
    <Container>
      <Header onPress={onPressGoBack} title="계정 정보 수정" />
      <ProfileContainer>
        <Profile source={images.PROFILE_GRAY} />
      </ProfileContainer>
      <NicknameChangeContainer>
        <Title>닉네임 수정</Title>
        <TextInput
          value={newNickname}
          onChangeText={setNewNickname}
          placeholder="10자 이내 닉네임을 입력해주세요."
        />
        {errorMessage ? <AlertMessage message={errorMessage} /> : null}
      </NicknameChangeContainer>
      <EditProfileFeature
        onPressMemberCancellation={onPressMemberCancellation}
        onPressLogout={onPressLogout}
      />
      <Button
        text="저장하기"
        onPress={handlePostEditName}
        backgroundColor={COLORS.TWO}
        textColor="black"
      />
      <EmptyView />
    </Container>
  );
}

export default EditProfileScreen;
