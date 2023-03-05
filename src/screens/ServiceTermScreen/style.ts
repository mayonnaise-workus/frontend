import styled from 'styled-components/native';

export const ServiceTermContainer = styled.View`
  flex: 5;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const AllAgreeRow = styled(Row)`
  padding-top: 15px;
  padding-bottom: 30px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: black;
`;

export const Group = styled.View`
  flex-direction: row;
`;

export const ViewContainer = styled.ScrollView`
  flex: 6;
`;

export const ServiceTermDetailContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ServiceTermDetailText = styled.Text`
  font-size: 15px;
  color: black;
  margin-bottom: 5px;
`;
