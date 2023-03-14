import React from 'react';
import images from '../../../../assets/images';
import {Logo, Text, Wrapper} from './style';

interface IProps {
  title: string;
  onPress: () => void;
}

function Button(props: IProps) {
  const {title, onPress} = props;

  return (
    <Wrapper onPress={onPress}>
      <Text>{title}</Text>
      <Logo source={images.RIGHT_ICON} />
    </Wrapper>
  );
}
export default Button;
