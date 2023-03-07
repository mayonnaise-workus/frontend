import React from 'react';
import images from '../../../../assets/images';
import {
  EditProfile,
  EditProfilePressable,
  Profile,
  Text,
  Wrapper,
} from './style';

interface IProps {
  onPress: () => void;
}

function NickName({onPress}: IProps) {
  return (
    <Wrapper>
      <Profile source={images.PROFILE_WHITE} />
      <EditProfilePressable onPress={onPress}>
        <EditProfile source={images.PENCIL_ICON} />
      </EditProfilePressable>
      <Text>Workers</Text>
    </Wrapper>
  );
}

export default NickName;
