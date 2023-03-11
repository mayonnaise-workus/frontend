import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const ImageContainer = styled.View`
  flex: 20;
  justify-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const Image = styled.Image`
  width: 72.76px;
  height: 72.76px;
  margin-bottom: 28px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.GRAY_4};
`;