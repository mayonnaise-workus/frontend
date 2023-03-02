import React from 'react';
import images from '../../../../assets/images';
import {ImageBlock, PressableBlock, Text, Wrapper} from './style';

interface IProps {
  navigation: undefined;
  title: string;
}

function Header(props: IProps) {
  const {navigation, title} = props;

  return (
    <Wrapper>
      <PressableBlock onPress={() => navigation.pop()}>
        <ImageBlock source={images.LEFT_ICON} />
      </PressableBlock>
      <Text>{title}</Text>
    </Wrapper>
  );
}

export default Header;
