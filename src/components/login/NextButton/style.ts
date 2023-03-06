import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  flex: 1;
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
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props: {textColor: string}) => props.textColor};
`;
