import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

const Wrapper = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: ${Dimensions.get('window').width - 40}px;
  height: 48px;
  border-radius: 10px;
  background-color: ${COLORS.GRAY_8};
  margin-bottom: 24px;
`;

const Logo = styled.Image`
  width: 13.5px;
  height: 18.75px;
`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 17px;
  color: ${COLORS.GRAY_1};
`;

export {Logo, Text, Wrapper};
