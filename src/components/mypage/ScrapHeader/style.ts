import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

export const Wrapper = styled.View`
  height: 44px;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${COLORS.GRAY_7};
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: black;
`;
