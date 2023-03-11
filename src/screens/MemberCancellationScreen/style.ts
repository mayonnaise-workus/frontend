import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const TitleContainer = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
  height: 28px;
`;

export const TitleText = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 20px;
`;

export const DescriptionContainer = styled.View`
  flex: 1.5;
  padding-right: 20px;
  padding-left: 20px;
`;

export const RadioGroupContainer = styled.View`
  flex: 2;
  padding-right: 20px;
  padding-left: 20px;
`;

export const TextInputContainer = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
  flex: 1;
`;

export const TextInput = styled.TextInput`
  width: ${Dimensions.get('window').width - 40}px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${COLORS.GRAY_6};
`;

export const EmptyView = styled.View`
  flex: 1;
`;
