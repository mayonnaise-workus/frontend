import React from 'react';
import images from '../../../../assets/images';
import {ImageBlock, PressableBlock, Text, Wrapper} from './style';

interface IProps {
  navigation: undefined;
}

function ScrapHeader(props: IProps) {
  const {navigation} = props;

  return (
    <Wrapper>
      <PressableBlock onPress={() => navigation.pop()}>
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
