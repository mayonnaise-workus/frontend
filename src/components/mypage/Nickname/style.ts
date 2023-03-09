import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

const Wrapper = styled.View`
  flex: 3;
  width: ${Dimensions.get('window').width - 40}px;
  position: relative;
  border-radius: 10px;
  background-color: ${COLORS.GRAY_8};
  align-items: center;
  margin-bottom: 12px;
`;

const Profile = styled.Image`
  width: 106px;
  margin-top: 16px;
  height: 106px;
`;

const EditProfilePressable = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const EditProfile = styled.Image`
  width: 18.43px;
  height: 18.44px;
`;

const Text = styled.Text`
  align-items: center;
  margin-top: 8px;
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.GRAY_1};
`;

export {Wrapper, Text, Profile, EditProfilePressable, EditProfile};
