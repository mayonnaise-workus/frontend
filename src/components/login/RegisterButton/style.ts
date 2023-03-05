import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

interface IPressableWrapperProps {
  press: boolean;
  width: number;
  height: number;
  margin?: number;
}

export const PressableWrapper = styled.Pressable<IPressableWrapperProps>`
  background-color: ${({press}) => (press ? COLORS.FIVE : COLORS.GRAY_8)};
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
  border-width: 1px;
  border-color: ${({press}) => (press ? COLORS.TWO : COLORS.GRAY_8)};
  border-radius: 10px;
  justify-content: center;
`;

export const Icon = styled.Text`
  text-align: center;
`;
export const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
