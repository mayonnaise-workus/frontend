import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import COLORS from '../../../packages/colors';
import Button from '../../components/login/LoginButton/Button';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import Title from '../../components/login/Title/Title';
import {purpose} from '../../data';
import {ButtonView, FilterList} from './style';
interface IProps {
  navigation: undefined;
}

interface Data {
  id: number;
  title: string;
}

function RegisterPurposeScreen(props: IProps) {
  const {navigation} = props;
  const [data, setData] = useState<Data[]>([]);
  const check = data.length >= 1;

  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <Title title="업무 목적 설정" />
      <FilterList>
        {purpose.map(item => {
          return (
            <View key={item.id}>
              <RegisterButton
                id={item.id}
                title={item.title}
                width={172}
                height={162}
                top={6}
                icon={item.icon}
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
          onPress={() => navigation.navigate('RegisterWorkSpace')}
        />
      </ButtonView>
    </SafeAreaView>
  );
}

export default RegisterPurposeScreen;
