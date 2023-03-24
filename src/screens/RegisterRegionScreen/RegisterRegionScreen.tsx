import React, {useState} from 'react';
import {Alert, Dimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Description from '../../components/login/Description/Description';
import {region} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import COLORS from '../../../packages/colors';
import {FilterList} from './style';
import {connect, useDispatch} from 'react-redux';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Button from '../../components/login/NextButton/NextButton';
import {setLocation_ids} from '../../redux/slice/PostPreferenceSlice';
interface IProps {
  navigation: IntroStackNavigationProps<'RegisterRegion'>;
  route: RouteProp<IntroStackParamList, 'RegisterRegion'>;
}

function RegisterRegionScreen({navigation}: IProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const check = checkList.length >= 1;
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(setLocation_ids(checkList));
    check
      ? navigation.navigate('RegisterPurpose')
      : Alert.alert('지역을 1개 이상 선택해주세요');
  };

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
        text="다음"
        backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
        textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSubmit}
      />
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  location_ids: state.postpreference.location_ids,
});

const mapDispatchToProps = {
  setLocation_ids,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterRegionScreen);
