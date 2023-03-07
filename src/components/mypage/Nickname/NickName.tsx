import React from 'react';
import images from '../../../../assets/images';
import {Block, EditProfile, Pressable, Profile, Text, Wrapper} from './style';

interface IProps {
  onPress: () => void;
}

function NickName({onPress}: IProps) {
  return (
    <Wrapper>
      <Block>
        <Profile source={images.PROFILE_WHITE} />
        <Pressable onPress={onPress}>
          <EditProfile source={images.PENCIL_ICON} />
        </Pressable>
      </Block>
      <Text>Workers</Text>
    </Wrapper>
  );
}

export default NickName;
