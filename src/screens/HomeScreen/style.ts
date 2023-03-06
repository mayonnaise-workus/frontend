import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const SliderButtonContainer = styled.View`
  height: 80px;
  justify-content: center;
`;

export const SliderButton = styled.View`
  width: ${Dimensions.get('window').width - 72}px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #fff9e8;
  border-width: 1px;
  border-color: #ffcf54;
  border-radius: 10px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const SliderButtonText = styled.Text`
  color: black;
`;

export const MapContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 300px;
  position: relative;
`;

export const CategoryRow = styled.View`
  flex-direction: row;
  position: absolute;
  top: 10px;
  left: 20px;
  gap: 5px;
`;

export const Category = styled.Pressable`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: white;
  border-width: 1px;
  border-radius: 30px;
`;

export const CategoryText = styled.Text`
  color: black;
`;

export const CategoryDetailRow = styled.View`
  flex-direction: row;
  position: absolute;
  top: 50px;
  left: 20px;
  gap: 5px;
`;
