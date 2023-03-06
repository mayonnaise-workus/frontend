import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import COLORS from '../../../packages/colors';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import {purpose} from '../../data';
import {FilterList} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {PostPurposeApi} from '../../redux/service/PostPurposeApi';
import {RootState} from '../../redux/store/store';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Button from '../../components/login/NextButton/NextButton';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterPurpose'>;
  route: RouteProp<IntroStackParamList, 'RegisterPurpose'>;
}

function RegisterPurposeScreen({navigation}: IProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const check = checkList.length >= 1;
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.purpose);

  const [containerWidth, setContainerWidth] = useState(0);
  const sideMargins = 20 * 2;
  const gap = 10;
  const numColumns = 2;

  const handleSubmit = async () => {
    PostPurposeApi(checkList)(dispatch);
  };

  useEffect(() => {
    data === '200' && navigation.navigate('RegisterWorkspace');
  }, [data, navigation]);

  return (
    <Wrapper>
      <OnboardingHeader text="업무 목적 설정" goback={navigation.goBack} />
      <FilterList
        contentContainerStyle={{
          alignItems: 'center',
        }}
        data={purpose.slice(1)}
        renderItem={({item}) => (
          <RegisterButton
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            width={(containerWidth - sideMargins - gap) / numColumns}
            height={(containerWidth - sideMargins - gap) / numColumns}
            margin={true}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        )}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        numColumns={numColumns}
      />
      <Button
        text="다음"
        backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
        textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
        onPress={handleSubmit}
      />
    </Wrapper>
  );
}

export default RegisterPurposeScreen;
