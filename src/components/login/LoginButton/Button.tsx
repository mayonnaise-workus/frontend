import React from 'react';
import {PressableBlock, TextBlock} from './style';

export interface IProps {
  text: string;
  onPress: () => void;
  textColor: string;
  backgroundColor: string;
}

function Button(props: IProps) {
  const {text, onPress, backgroundColor, textColor} = props;

  return (
    <PressableBlock backgroundColor={backgroundColor} onPress={onPress}>
      <TextBlock textColor={textColor}>{text}</TextBlock>
    </PressableBlock>
  );
}

export default Button;
