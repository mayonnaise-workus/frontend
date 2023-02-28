import {Pressable, Text} from 'react-native';
import styled from 'styled-components';
import {IProps} from './Button';
import COLORS from '../../../../packages/colors';

export const PressableBlock = styled(Pressable)<IProps>`
  width: 350px;
  height: 60px;
  left: 20px;
  margin-bottom: 12px;
  background-color: ${COLORS.FOUR};
  border-radius: 10px;
  justify-content: center;
`;

export const TextBlock = styled(Text)<IProps>`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  color: ${COLORS.GRAY_1};
`;
