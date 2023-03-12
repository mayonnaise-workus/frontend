import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Pressable = styled.Pressable`
  margin-top: 5px;
  align-items: flex-end;
  margin-right: 20px;
`;

export const X = styled.Image`
  width: 27px;
  height: 27px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Message = styled.Text`
  text-align: center;
  color: ${COLORS.GRAY_3};
`;

export const Image = styled.Image`
  width: 72.76px;
  height: 72.76px;
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`;
