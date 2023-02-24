import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import Title from '../../components/login/Title/Title';
import Description from '../../components/login/Description/Description';
import COLORS from '../../../packages/colors';
import {workspace} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import Button from '../../components/login/LoginButton/Button';
import {ButtonView, FilterList} from './style';

interface IProps {
  navigation: undefined;
}
interface Data {
  id: number;
  title: string;
}
function RegisterWorkSpaceScreen(props: IProps) {
  const {navigation} = props;
  const [data, setData] = useState<Data[]>([]);
  const check = data.length >= 1 && data.length <= 3;

  function onSubmit() {
    check
      ? navigation.navigate('Main')
      : Alert.alert('최대 3개까지 선택할 수 있습니다.');
  }
  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <Title title="어떤 워크 스페이스를 선호하나요?" />
      <Description description="최대 3개까지 선택할 수 있습니다." />
      <FilterList>
        {workspace.map(item => {
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
          text="시작하기"
          backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
          textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
          onPress={onSubmit}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default RegisterWorkSpaceScreen;
