import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

export const Text = styled.Text`
  color: ${COLORS.GRAY_5};
  margin-bottom: 10px;
`;
export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 264px;
  height: 92.15px;
`;

export const LoginContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 100px;
`;

export const Button = styled.Pressable`
  background-color: #fff0c8;
  width: ${Dimensions.get('window').width - 40}px;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
