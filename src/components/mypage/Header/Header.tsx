import React from 'react';
import images from '../../../../assets/images';
import {ImageBlock, PressableBlock, Text, Wrapper} from './style';

interface IProps {
  onPress: () => void;
  title: string;
}

function Header({onPress, title}: IProps) {
  return (
    <Wrapper>
      <PressableBlock onPress={onPress}>
        <ImageBlock source={images.LEFT_ICON} />
      </PressableBlock>
      <Text>{title}</Text>
    </Wrapper>
  );
}

export default Header;
