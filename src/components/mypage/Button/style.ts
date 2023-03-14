import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

const Wrapper = styled.Pressable`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${Dimensions.get('window').width - 40}px;
  height: 54px;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: ${COLORS.GRAY_8};
`;

const Logo = styled.Image`
  width: 7.5px;
  height: 15px;
`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 17px;
  color: ${COLORS.GRAY_1};
  left: 16px;
`;

export {Logo, Wrapper, Text};
