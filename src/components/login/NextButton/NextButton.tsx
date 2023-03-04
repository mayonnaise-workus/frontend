import React from 'react';
import {PressableBlock, TextBlock} from './style';

export interface IProps {
  text: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

function Button(props: IProps) {
  const {text, onPress, backgroundColor, textColor} = props;

  return (
    <PressableBlock onPress={onPress} backgroundColor={backgroundColor}>
      <TextBlock textColor={textColor}>{text}</TextBlock>
    </PressableBlock>
  );
}

export default Button;
