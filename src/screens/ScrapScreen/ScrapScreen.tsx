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
      const newArray = Object.entries(data.list) as Array<[string, object]>;
      setWorkSpaceList(newArray);
    }
  }, [data]);

  return (
    <SafeAreaView>
      <ScrapHeader onPress={onPress} />
      {workSpaceList.length > 0
        ? workSpaceList.map((item: [string, object], index: number) => (
            <WorkSpaceList key={index} list={item} />
          ))
        : null}
    </SafeAreaView>
  );
}

export default ScrapScreen;
