import React from 'react';
import images from '../../../../assets/images';
import {Logo, Text, Wrapper} from './style';

interface IProps {
  navigation: undefined;
}
function ScrapButton(props: IProps) {
  const {navigation} = props;

  return (
    <Wrapper onPress={() => navigation.navigate('Scrap')}>
      <Logo source={images.BOOKMARK_ICON} />
      <Text>스크랩</Text>
    </Wrapper>
  );
}

export default ScrapButton;
