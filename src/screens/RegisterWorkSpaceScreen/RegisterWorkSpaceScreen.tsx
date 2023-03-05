import React, {useEffect, useState} from 'react';
import {Dimensions, Alert} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Description from '../../components/login/Description/Description';
import COLORS from '../../../packages/colors';
import {workspace} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import {ScrollView} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {PostWorkSpaceApi} from '../../redux/service/PostWorkSpaceApi';
import {RootState} from '../../redux/store/store';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Button from '../../components/login/NextButton/NextButton';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterWorkspace'>;
  route: RouteProp<IntroStackParamList, 'RegisterWorkspace'>;
}

function RegisterWorkSpaceScreen({navigation}: IProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const check = checkList.length >= 1 && checkList.length <= 3;
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.workspace);

  const handleSubmit = async () => {
    check
      ? PostWorkSpaceApi(checkList)(dispatch)
      : Alert.alert('최대 3개까지 선택할 수 있습니다');
  };

  useEffect(() => {
    data === '200' && navigation.navigate('MainNavigator');
  }, [data, navigation]);

  return (
    <Wrapper>
      <OnboardingHeader
        text="어떤 워크 스페이스를 선호하나요?"
        goback={navigation.goBack}
      />
      <Description description="최대 3개까지 선택할 수 있습니다." />
      <ScrollView
        contentContainerStyle={{alignItems: 'center', gap: 10}}
        showsVerticalScrollIndicator>
        {workspace.map(item => {
          return (
            <RegisterButton
              key={item.id}
              id={item.id}
              title={item.title}
              width={Dimensions.get('window').width - 40}
              height={54}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          );
        })}
        <Button
          text="시작하기"
          backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
          textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
          onPress={handleSubmit}
        />
      </ScrollView>
    </Wrapper>
  );
}

export default RegisterWorkSpaceScreen;
