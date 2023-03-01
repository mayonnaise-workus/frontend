import React from 'react';
import images from '../../../../assets/images';
import {Block, EditProfile, Pressable, Profile, Text, Wrapper} from './style';

interface IProps {
  navigation: undefined;
}

function NickName(props: IProps) {
  const {navigation} = props;

  return (
    <Wrapper>
      <Block>
        <Profile source={images.PROFILE_WHITE} />
        <Pressable onPress={() => navigation.navigate('EditProfile')}>
          <EditProfile source={images.PENCIL_ICON} />
        </Pressable>
      </Block>
      <Text>Workers</Text>
    </Wrapper>
  );
}

export default NickName;
