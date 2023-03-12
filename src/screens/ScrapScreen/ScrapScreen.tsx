import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import ScrapHeader from '../../components/mypage/ScrapHeader/ScrapHeader';
import WorkSpaceList from '../../components/mypage/WorkSpaceList/WorkSpaceList';
import {useDispatch, useSelector} from 'react-redux';
import {WorkSpaceListApi} from '../../redux/service/WorkSpaceListApi';
import {RootState} from '../../redux/store/store';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import {DeleteFavoriteWorkSpaces} from '../../redux/service/DeleteFavoriteWorkSpaces';
import images from '../../../assets/images';
import {ImageContainer, Image, Text, Container, Block} from './style';
import {ScrollView} from 'react-native-gesture-handler';

interface IProps {
  navigation: MyScreenStackNavigationProps<'Scrap'>;
  route: RouteProp<MyScreenStackParamList, 'Scrap'>;
}

function ScrapScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.workspacelist);
  const [workSpaceList, setWorkSpaceList] = useState<Array<[string, object]>>(
    [],
  );

  const onPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    async function fetchData() {
      await WorkSpaceListApi()(dispatch);
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setWorkSpaceList(data.list);
    }
  }, [data]);

  async function handleData(id: number) {
    await DeleteFavoriteWorkSpaces(id)(dispatch);
    const newWorkSpaceList = await WorkSpaceListApi()(dispatch);
    if (newWorkSpaceList?.data?.list) {
      setWorkSpaceList(newWorkSpaceList.data.list);
    }
  }

  return (
    <>
      <Container>
        <ScrapHeader onPress={onPress} />
      </Container>
      <Block>
        {workSpaceList && workSpaceList.length ? (
          <ScrollView>
            {workSpaceList.map((item: [string, object], index: number) => (
              <WorkSpaceList key={index} list={item} handleData={handleData} />
            ))}
          </ScrollView>
        ) : (
          <ImageContainer>
            <Image source={images.SPARKLE} />
            <Text>아직 스크랩 중인 공간이 없어요!</Text>
          </ImageContainer>
        )}
      </Block>
    </>
  );
}

export default ScrapScreen;
