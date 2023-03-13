import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const ProfileContainer = styled.View`
  flex: 3;
  align-items: center;
`;

export const Profile = styled.Image`
  width: 106px;
  height: 106px;
`;

export const NicknameChangeContainer = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  flex: 2;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 12px;
`;

export const TextInput = styled.TextInput`
  width: ${Dimensions.get('window').width - 40}px;
  height: 52px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${COLORS.GRAY_8};
`;

export const EmptyView = styled.View`
  flex: 1;
`;
