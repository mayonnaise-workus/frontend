import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

const Logo = styled.Image`
  width: 20.25px;
  height: 28.125px;
`;

const Address = styled.Text`
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
  width: 180px;
`;

const FirstLineContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
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

const Wrapper = styled.View`
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  background-color: ${COLORS.GRAY_8};
`;

export {
  Wrapper,
  Information,
  ImageBlock,
  Name,
  Address,
  Logo,
  FirstLineContainer,
};
