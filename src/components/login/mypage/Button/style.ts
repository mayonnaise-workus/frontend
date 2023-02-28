import styled from 'styled-components';
import COLORS from '../../../../../packages/colors';

const Logo = styled.Image`
  position: absolute;
  width: 7.5px;
  height: 15px;
  position: absolute;
  left: 319px;
  top: 19.5px;
`;

const Text = styled.Text`
  position: absolute;
  margin-top: 8px;
  font-weight: 500;
  font-size: 17px;
  color: ${COLORS.GRAY_1};
  left: 16px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  width: 350px;
  height: 54px;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: #f4f5f7;
  align-items: center;
`;

export {Logo, Wrapper, Text};
