import React, {useEffect} from 'react';
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

  const onPress = () => {
    navigation.goBack();
  }

  useEffect(() => {
    WorkSpaceListApi()(dispatch);
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ScrapHeader onPress={onPress} />
      {data && data.map(item => <WorkSpaceList key={item.id} list={item} />)}
    </SafeAreaView>
  );
}

export default ScrapScreen;
