import React from 'react';
import {ButtonContainer, PressableBlock, TextBlock} from './style';

export interface IProps {
  text: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

function Button(props: IProps) {
  const {text, onPress, backgroundColor, textColor} = props;

  return (
    <ButtonContainer>
      <PressableBlock onPress={onPress} backgroundColor={backgroundColor}>
        <TextBlock textColor={textColor}>{text}</TextBlock>
      </PressableBlock>
    </ButtonContainer>
  );
}

export default Button;
