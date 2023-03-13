import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {Magazine} from '../../redux/service/Magazine';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import SubHeader from '../../components/common/SubHeader';

const MagazineScreen = () => {
  const {data} = useSelector((state: RootState) => state.magazine);
  const [magazine, setMagazine] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    Magazine()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setMagazine(data.list);
    }
  }, [data]);

  return (
    <Container>
      <SubHeader />
      <ScrollView>
        {magazine &&
          magazine.map((item: string, index: number) => (
            <ImageBlock key={index}>
              <Image source={{uri: item.title_image}} />
            </ImageBlock>
          ))}
      </ScrollView>
    </Container>
  );
};

export default MagazineScreen;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
export const ImageBlock = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 350px;
  width: 350px;
  border-radius: 10px;
  margin-bottom: 12px;
`;
