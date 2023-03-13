import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  margin-top: 12px;
  align-items: center;
  justify-content: flex-end;
`;

export const PressableBlock = styled.Pressable`
  width: ${Dimensions.get('window').width - 40}px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props: {backgroundColor: string}) =>
    props.backgroundColor};
`;

export const TextBlock = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${(props: {textColor: string}) => props.textColor};
`;
