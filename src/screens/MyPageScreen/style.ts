import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 3;
`;

export const EmptyContainer = styled.View`
  flex: 2;
`;

export const Wrapper = styled.Pressable`
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

export const Logo = styled.Image`
  width: 7.5px;
  height: 15px;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: 17px;
  color: ${COLORS.GRAY_1};
`;
