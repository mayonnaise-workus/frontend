import styled from 'styled-components';
import COLORS from '../../../../../packages/colors';

const Block = styled.View`
  flex-direction: row;
`;

const Pressable = styled.Pressable``;

const EditProfile = styled.Image`
  position: absolute;
  left: 85px;
  margin-top: 18.56px;
  width: 18.43px;
  height: 18.44;
`;
const Profile = styled.Image`
  width: 106px;
  margin-top: 16px;
  height: 106;
`;
const Text = styled.Text`
  align-items: center;
  margin-top: 8px;
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.GRAY_1};
`;

const Wrapper = styled.View`
  position: absolute;
  width: 350px;
  height: 171px;
  left: 20px;
  top: 103px;
  border-radius: 10px;
  background-color: #f4f5f7;
  align-items: center;
`;

export {Block, Wrapper, Text, Profile, EditProfile, Pressable};
