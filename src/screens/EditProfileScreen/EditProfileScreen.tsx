import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Header from '../../components/mypage/Header/Header';
import images from '../../../assets/images';
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
import AlertMessage from '../../components/login/AlertMessage/AlertMessage';

interface IProps {
  navigation: MyScreenStackNavigationProps<'EditProfile'>;
  route: RouteProp<MyScreenStackParamList, 'EditProfile'>;
}

function EditProfileScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {member} = useSelector((state: RootState) => state.member);
  const {userError} = useSelector((state: RootState) => state.editNickname);
  const [newNickname, setNewNickname] = useState<string>(member.name);
  const [errorMessage, setErrorMessage] = useState<string>('');

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
    userError && setErrorMessage(userError);
    const postData = {
      name: newNickname,
    };
    EditNicknameApi(postData)(dispatch);
    MemberApi()(dispatch);
    setErrorMessage('');
  }

  useEffect(() => {
    MemberApi()(dispatch);
    userError && setErrorMessage(userError);
  }, [dispatch, setNewNickname, userError]);

  useEffect(() => {
    setErrorMessage('');
  }, [dispatch, navigation]);

  return (
    <SafeAreaView>
      <Header onPress={onPressGoBack} title="계정 정보 수정" />
      <Wrapper>
        <Profile source={images.PROFILE_GRAY} />
      </Wrapper>
      <Container>
        <Title>닉네임 수정</Title>
        <TextInput
          value={newNickname}
          onChangeText={setNewNickname}
          placeholder="10자 이내 닉네임을 입력해주세요."
        />
        {errorMessage ? <AlertMessage message={errorMessage} /> : null}
      </Container>
      <EditProfileFeature
        onPressMemberCancellation={onPressMemberCancellation}
        onPressLogout={onPressLogout}
      />
      <Button onPress={handlePostEditName} text="저장하기" />
    </SafeAreaView>
  );
}

export default EditProfileScreen;
