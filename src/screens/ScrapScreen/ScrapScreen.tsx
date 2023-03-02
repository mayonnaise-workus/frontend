import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import ScrapHeader from '../../components/mypage/ScrapHeader/ScrapHeader';
import WorkSpaceList from '../../components/mypage/WorkSpaceList/WorkSpaceList';
import {useDispatch, useSelector} from 'react-redux';
import {WorkSpaceListApi} from '../../redux/service/WorkSpaceListApi';
import {RootState} from '../../redux/store/store';

interface IProps {
  navigation: undefined;
}
function ScrapScreen(props: IProps) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {loading, error, data} = useSelector(
    (state: RootState) => state.workspacelist,
  );

  useEffect(() => {
    dispatch(WorkSpaceListApi());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ScrapHeader navigation={navigation} />
      {data && data.map(item => <WorkSpaceList key={item.id} list={item} />)}
    </SafeAreaView>
  );
}

export default ScrapScreen;
