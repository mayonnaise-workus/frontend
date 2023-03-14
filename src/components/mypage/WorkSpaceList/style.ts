import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

const Logo = styled.Image`
  width: 18.25px;
  height: 23.125px;
  padding-left: 20px;
  margin-left: 20px;
`;

const Address = styled.Text`
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  width: 180px;
`;

const FirstLineContainer = styled.View`
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.Text`
  width: 120px;
  height: 22px;
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.GRAY_1};
`;

const ImageBlock = styled.Image`
  width: 120px;
  height: 128px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Information = styled.View`
  padding-top: 15px;
  padding-left: 15px;
`;

const Wrapper = styled.Pressable`
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  background-color: ${COLORS.GRAY_8};
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
  background-color: #e4e6eb;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const DetailTagContent = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: black;
`;

export {
  Wrapper,
  Information,
  ImageBlock,
  Name,
  Address,
  Logo,
  FirstLineContainer,
  DetailTagRow,
  DetailTag,
  DetailTagContent,
};
