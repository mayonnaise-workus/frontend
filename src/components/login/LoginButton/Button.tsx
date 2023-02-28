import React from 'react';
import {PressableBlock, TextBlock} from './style';

export interface IProps {
  text: string;
  onPress: () => void;
}

function Button(props: IProps) {
  const {text, onPress} = props;

  return (
    <PressableBlock onPress={onPress}>
      <TextBlock>{text}</TextBlock>
    </PressableBlock>
  );
}

export default Button;
