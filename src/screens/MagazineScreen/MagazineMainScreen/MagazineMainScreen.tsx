import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../redux/store/store';
import {Magazine} from '../../../redux/service/Magazine';
import {ScrollView} from 'react-native';
import SubHeader from '../../../components/common/SubHeader';
import {RouteProp} from '@react-navigation/native';
import {
  MagazineScreenStackNavigationProps,
  MagazineScreenStackParamList,
} from '../../magazineScreenPropsType';
import {Block, Container, Image} from './style';

interface IProps {
  navigation: MagazineScreenStackNavigationProps<'MagazineMain'>;
  route: RouteProp<MagazineScreenStackParamList, 'MagazineMain'>;
}

interface IMagazineListProps {
  content_image: string;
  title_image: string;
}

const MagazineMainScreen = ({navigation}: IProps) => {
  const {data} = useSelector((state: RootState) => state.magazine);
  const [magazine, setMagazine] = useState<IMagazineListProps[]>([]);
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
      <ScrollView>
        <SubHeader />
        {magazine.length >= 1 &&
          magazine.map((item, index) => (
            <Block key={index} onPress={handlePress}>
              <Image source={{uri: item.title_image}} />
            </Block>
          ))}
      </ScrollView>
    </Container>
  );
};

export default MagazineMainScreen;
