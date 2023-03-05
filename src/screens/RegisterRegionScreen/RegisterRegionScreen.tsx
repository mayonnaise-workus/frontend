import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Description from '../../components/login/Description/Description';
import {region} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import COLORS from '../../../packages/colors';
import {FilterList} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {PostRegionApi} from '../../redux/service/PostRegionApi';
import {RootState} from '../../redux/store/store';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Button from '../../components/login/NextButton/NextButton';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterRegion'>;
  route: RouteProp<IntroStackParamList, 'RegisterRegion'>;
}

function RegisterRegionScreen({navigation}: IProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const check = checkList.length >= 1;
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.region);

  const handleSubmit = async () => {
    PostRegionApi(checkList)(dispatch);
  };

  useEffect(() => {
    data === '200' && navigation.navigate('RegisterPurpose');
  }, [data, navigation]);

  return (
    <Wrapper>
      <OnboardingHeader text="지역 설정" goback={navigation.goBack} />
      <Description
        description={`TUNE은 특정 지하철역 (강남,역삼,선릉,삼성,논현) 주변의
워크 스페이스 정보를 우선 제공합니다.

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
        text="다음"
        backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
        textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSubmit}
      />
    </Wrapper>
  );
}

export default RegisterRegionScreen;
