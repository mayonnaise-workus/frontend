import styled from 'styled-components/native';
import COLORS from '../../../packages/colors';

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

export const ImageContainer = styled.View`
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ContentContainer = styled.View`
  height: 175px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
`;

export const FirstLineContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const BookMark = styled.View``;

export const LogoImage = styled.Image`
  width: 20.25px;
  height: 28.125px;
`;

export const DescriptionContainer = styled.View`
  margin-bottom: 12px;
  width: 300px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: black;
`;

export const DetailTagRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const DetailTag = styled.View`
  height: 35px;
  padding: 4px 16px;
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

export const AspectContainer = styled.View`
  height: 350px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 36px;
`;

export const DetailContainer = styled.View`
  width: 210px;
  height: 350px;
  padding: 16px;
  padding-top: 30px;
  background-color: ${COLORS.FOUR};
  border-radius: 30px;
`;

export const EachDetail = styled.View`
  margin-bottom: 15px;
`;

export const DetailTitle = styled.Text`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const DetailContent = styled.Text`
  color: black;
  margin-bottom: 5px;
`;

export const SponsorImageContainer = styled.View`
  width: 254px;
  height: 350px;
  border-radius: 30px;
  overflow: hidden;
`;

export const SponsorImage = styled.Image`
  width: 254px;
  height: 175px;
`;

export const SponsorDetail = styled.View`
  padding: 20px;
  width: 254px;
  height: 170px;
  background-color: ${COLORS.GRAY_8};
`;

export const URLContainer = styled.View`
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 12px;
`;

export const GrayLogo = styled.Image`
  width: 21.1px;
  height: 21.1px;
`;

export const TitleContainerText = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: black;
`;

export const MapContainer = styled.View`
  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
`;
