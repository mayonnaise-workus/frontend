import React, {useEffect, useState} from 'react';
import OnboardingHeader from '../components/common/OnboardingHeader';
import Wrapper from '../components/common/Wrapper';
import RegisterButton from '../components/login/RegisterButton/RegisterButton';
import {region} from '../data';
import {FilterList} from './RegisterRegionScreen/style';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import Button from '../components/login/NextButton/NextButton';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from './myScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import {Alert, Dimensions} from 'react-native';
import COLORS from '../../packages/colors';
import Description from '../components/login/Description/Description';
import {PostRegionApi} from '../redux/service/PostRegionApi';
import {PreferenceApi} from '../redux/service/PreferenceApi';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MyPage'>;
  route: RouteProp<MyScreenStackParamList, 'MyPage'>;
}
function RegionSettingScreen({navigation}: IProps) {
  const {data} = useSelector((state: RootState) => state.preference);
  const {data: editRegion} = useSelector((state: RootState) => state.region);
  const [checkList, setCheckList] = useState<number[]>([]);
  const [checkSame, setCheckSame] = useState<boolean>(false);
  const check = checkList && checkList.length >= 1;
  const dispatch = useDispatch();

  useEffect(() => {
    PreferenceApi()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setCheckList(data.preference_workspace_regions);
    }
  }, [data]);

  useEffect(() => {
    JSON.stringify(data.preference_workspace_regions) ===
    JSON.stringify(checkList)
      ? setCheckSame(false)
      : setCheckSame(true);
  }, [data, checkList]);

  const handleSubmit = async () => {
    check && checkSame
      ? PostRegionApi(checkList)(dispatch)
      : Alert.alert('기존 설정한 지역과 동일합니다! ');
  };
  useEffect(() => {
    let timerId: number;

    const navigateToMyPage = () => {
      editRegion === 200 && navigation.navigate('MyPage');
    };

    timerId = setTimeout(navigateToMyPage, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [editRegion, navigation]);
  return (
    <Wrapper>
      <OnboardingHeader text="지역 설정" goback={navigation.goBack} />
      <Description
        description={`TUNE은 특정 지하철역
(강남,역삼,선릉,삼성,양재시민의숲) 
주변의 워크 스페이스 정보를 우선 제공합니다.
  
추후 더 멋지고 다양한 정보가 제공될 예정입니다!`}
      />
      <FilterList>
        {region.map(item => {
          return (
            <RegisterButton
              key={item.id}
              id={item.id}
              title={item.title}
              width={Dimensions.get('window').width - 40}
              height={54}
              margin={false}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          );
        })}
      </FilterList>
      <Button
        text="저장"
        backgroundColor={check && checkSame ? COLORS.TWO : COLORS.GRAY_7}
        textColor={check && checkSame ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSubmit}
      />
    </Wrapper>
  );
}

export default RegionSettingScreen;
