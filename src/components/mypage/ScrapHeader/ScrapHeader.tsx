import React from 'react';
import images from '../../../../assets/images';
import {ImageBlock, PressableBlock, Text, Wrapper} from './style';

interface IProps {
  onPress: () => void;
}

function ScrapHeader({onPress}: IProps) {
  return (
    <Wrapper>
      <PressableBlock onPress={onPress}>
        <ImageBlock source={images.LEFT_ICON} />
      </PressableBlock>
      <Text>스크랩</Text>
      <PressableBlock>
        <ImageBlock source={images.DOTSTHREEOUTLINEVERTICAL} />
      </PressableBlock>
    </Wrapper>
  );
}

export default ScrapHeader;
