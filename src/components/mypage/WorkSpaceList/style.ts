import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';
import {Dimensions} from 'react-native';

const Wrapper = styled.Pressable`
  width: ${Dimensions.get('window').width - 40}px;
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${COLORS.GRAY_8};
  position: relative;
`;

const ImageBlock = styled.Image`
  width: 120px;
  height: 128px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Information = styled.View`
  width: ${Dimensions.get('window').width - 160}px;
  padding-top: 15px;
  padding-left: 15px;
`;

const Name = styled.Text`
  font-weight: 600;
  font-size: 16px;
  width: ${Dimensions.get('window').width - 250}px;
  color: ${COLORS.GRAY_1};
`;

const Address = styled.Text`
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  width: 180px;
`;

const DetailTagRow = styled.View`
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const DetailTag = styled.View`
  height: 20px;
  background-color: ${COLORS.GRAY_7};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const DetailTagContent = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: black;
`;

const LogoContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Logo = styled.Image`
  width: 18.25px;
  height: 23.125px;
`;

export {
  Wrapper,
  Information,
  ImageBlock,
  Name,
  Address,
  Logo,
  LogoContainer,
  DetailTagRow,
  DetailTag,
  DetailTagContent,
};
