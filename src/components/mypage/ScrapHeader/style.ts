import styled from 'styled-components';
import COLORS from '../../../../packages/colors';

export const Wrapper = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${COLORS.GRAY_7};
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export const PressableBlock = styled.Pressable``;

export const ImageBlock = styled.Image`
  width: 10px;
  height: 20px;
`;
