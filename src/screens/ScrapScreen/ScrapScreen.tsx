import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
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
    <SafeAreaView>
      <ScrapHeader onPress={onPress} />
      {workSpaceList
        ? workSpaceList.map((item: [string, object], index: number) => (
            <WorkSpaceList key={index} list={item} handleData={handleData} />
          ))
        : null}
    </SafeAreaView>
  );
}

export default ScrapScreen;
