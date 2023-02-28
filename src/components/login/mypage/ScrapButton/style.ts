import styled from 'styled-components';
import COLORS from '../../../../../packages/colors';

const Logo = styled.Image`
  position: absolute;
  width: 13.5px;
  height: 18.75px;
  top: 15px;
  left: 144}px;
`;

const Text = styled.Text`
  position: absolute;
  align-items: center;
  margin-top: 8px;
  font-weight: 500;
  font-size: 17px;
  color: ${COLORS.GRAY_1};
  left: 167px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  width: 350px;
  height: 48px;
  left: 20px;
  top: 286px;
  border-radius: 10px;
  background-color: #f4f5f7;
  align-items: center;
  justify-content: center;
`;

export {Logo, Text, Wrapper};
