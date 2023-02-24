import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Description from '../../components/login/Description/Description';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import Title from '../../components/login/Title/Title';
import {region} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import Button from '../../components/login/LoginButton/Button';
import COLORS from '../../../packages/colors';
import {ButtonView, FilterList} from './style';

interface IProps {
  navigation: undefined;
}

interface Data {
  id: number;
  title: string;
}

function RegisterRegionScreen(props: IProps) {
  const {navigation} = props;
  const [data, setData] = useState<Data[]>([]);
  const check = data.length >= 1;

  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <Title title="지역 설정" />
      <Description
        description={`TUNE은 특정 지하철역 (강남,역삼,선릉,삼성,논현) 주변의
워크 스페이스 정보를 우선 제공합니다.

추후 더 멋지고 다양한 정보가 제공될 예정입니다!`}
      />
      <FilterList>
        {region.map(item => {
          return (
            <View key={item.id}>
              <RegisterButton
                id={item.id}
                title={item.title}
                width={350}
                height={54}
                top={12}
                data={data}
                setData={setData}
              />
            </View>
          );
        })}
      </FilterList>
      <ButtonView>
        <Button
          text="다음"
          backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
          textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
          onPress={() => navigation.navigate('RegisterPurpose')}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default RegisterRegionScreen;