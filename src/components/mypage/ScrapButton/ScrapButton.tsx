import React from 'react';
import images from '../../../../assets/images';
import {Logo, Text, Wrapper} from './style';

interface IProps {
  onPress: () => void;
}
function ScrapButton({onPress}: IProps) {
  return (
    <Wrapper onPress={onPress}>
      <Logo source={images.BOOKMARK_ICON} />
      <Text>스크랩</Text>
    </Wrapper>
  );
}

export default ScrapButton;
