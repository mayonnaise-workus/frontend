import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import images from '../../../assets/images';

const DetailWholeContainer = styled.View`
  width: ${Dimensions.get('window').width - 40}px;
  height: 260px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const DetailImage = styled.Image`
  flex: 4;
  width: 100%;
`;

const DetailBottomContainer = styled.View`
  flex: 3;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #f4f5f7;
`;

const DetailTitle = styled.Text`
  padding-top: 5px;
  padding-bottom: 5px;
  color: black;
  font-weight: bold;
`;

const DetailPlace = styled.Text`
  padding-top: 5px;
  padding-bottom: 5px;
  color: black;
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

const HomeScrollDetail = () => {
  return (
    <DetailWholeContainer>
      <DetailImage source={images.SAMPLE_PLACE_IMAGE} />
      <DetailBottomContainer>
        <DetailTitle>ㅇㅇ 카페</DetailTitle>
        <DetailPlace>서울시 강남구</DetailPlace>
        <DetailTagRow>
          <DetailTag>
            <DetailTagContent>카페</DetailTagContent>
          </DetailTag>
          <DetailTag>
            <DetailTagContent>노트북 작업</DetailTagContent>
          </DetailTag>
        </DetailTagRow>
      </DetailBottomContainer>
    </DetailWholeContainer>
  );
};

export default HomeScrollDetail;
