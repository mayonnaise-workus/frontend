import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const TitleContainer = styled.View`
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 20px;
  color: black;
`;

export const ContentContainer = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.Text`
  line-height: 20px;
  margin-bottom: 15px;
  color: black;
`;

export const SubTitleContainer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: black;
`;

export const Image = styled.Image`
  border-radius: 50px;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;
