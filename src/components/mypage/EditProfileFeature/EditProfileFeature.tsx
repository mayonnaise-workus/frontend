import React from 'react';
import {Alert} from 'react-native';
import COLORS from '../../../../packages/colors';
import {Block, Pressable, Text} from './style';

interface IProps {
  navigation: undefined;
}

function EditProfileFeature(props: IProps) {
  const {navigation} = props;

  const handleMember = async () => {
    Alert.alert(
      '',
      '회원 탈퇴를 진행하시겠습니까?',
      [
        {
          text: '예',
          onPress: () => {
            navigation.navigate('MemberCancellation');
          },
          style: 'destructive',
        },
        {text: '아니오', onPress: () => {}, style: 'cancel'},
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  const handleLogout = async () => {};
  return (
    <Block>
      <Pressable onPress={handleLogout}>
        <Text color={COLORS.GRAY_1}>로그아웃</Text>
      </Pressable>
      <Pressable onPress={handleMember}>
        <Text color={COLORS.ALERT_2}>회원 탈퇴</Text>
      </Pressable>
    </Block>
  );
}

export default EditProfileFeature;
