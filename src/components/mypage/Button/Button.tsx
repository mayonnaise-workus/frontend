import React from 'react';
import images from '../../../../assets/images';
import {Logo, Text, Wrapper} from './style';

interface IProps {
  title: string;
}

function Button(props: IProps) {
  const {title} = props;

  return (
    <Wrapper>
      <Text>{title}</Text>
      <Logo source={images.RIGHT_ICON} />
    </Wrapper>
  );
}
export default Button;
