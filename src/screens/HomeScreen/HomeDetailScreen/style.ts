import styled from 'styled-components/native';
import COLORS from '../../../../packages/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const ScrollViewContainer = styled.ScrollView``;

export const Header = styled.View`
  height: 44px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${COLORS.GRAY_7};
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: black;
`;

export const EmptyView = styled.View`
  width: 25px;
`;

export const Image = styled.Image`
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const ContentContainer = styled.View`
  height: 175px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const FirstLineContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.View`
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: black;
`;

export const DetailTagRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const DetailTag = styled.View`
  height: 30px;
  padding: 5px;
  background-color: ${COLORS.GRAY_7};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const DetailTagContent = styled.Text`
  padding-left: 10px;
  padding-right: 10px;
  color: black;
`;

export const URLContainer = styled.View`
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const URLTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const GrayLogo = styled.Image`
  width: 21.1px;
  height: 21.1px;
`;

export const URLTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: black;
`;

export const MapContainer = styled.View`
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
`;
