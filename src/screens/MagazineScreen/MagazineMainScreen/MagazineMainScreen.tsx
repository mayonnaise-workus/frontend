import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../redux/store/store';
import {Magazine} from '../../../redux/service/Magazine';
import {ScrollView} from 'react-native-gesture-handler';
import SubHeader from '../../../components/common/SubHeader';
import {RouteProp} from '@react-navigation/native';
import {
  MagazineScreenStackNavigationProps,
  MagazineScreenStackParamList,
} from '../../magazineScreenPropsType';
import {Block, Container, Image, ImageBlock} from './style';

interface IProps {
  navigation: MagazineScreenStackNavigationProps<'MagazineMain'>;
  route: RouteProp<MagazineScreenStackParamList, 'MagazineMain'>;
}
const MagazineMainScreen = ({navigation}: IProps) => {
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

  const handlePress = () => {
    navigation.navigate('MagazineDetail');
  };

  return (
    <Container>
      <SubHeader />
      <ScrollView>
        {magazine &&
          magazine.map((item: string, index: number) => (
            <Block key={index}>
              <ImageBlock onPress={handlePress}>
                <Image source={{uri: item.title_image}} />
              </ImageBlock>
            </Block>
          ))}
      </ScrollView>
    </Container>
  );
};

export default MagazineMainScreen;
