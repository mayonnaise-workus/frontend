import styled from 'styled-components';
import COLORS from '../../../packages/colors';

export const ButtonView = styled.View`
  position: absolute;
  width: 350px;
  height: 60px;
  top: 750px;
`;

export const TextInput = styled.TextInput`
  top: 220px;
  left: 23.75px;
  width: 350px;
  height: 52px;
  border-radius: 10px;
  padding-left: 18px;
  border-width: 1px;
  border-color: ${COLORS.GRAY_6};
`;
export const Text = styled.Text`
  margin-left: 6.25px;
  font-weight: ${({fontWeight}) => fontWeight};
  font-size: ${({fontSize}) => fontSize}px;
  color: ${({color}) => color};
`;

export const List = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

export const Wrapper = styled.View`
  top: 204px;
  left: 23.75px;
`;
