import CheckBox from '@react-native-community/checkbox';
import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import COLORS from '../../../packages/colors';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import Title from '../../components/login/Title/Title';
import Description from '../../components/login/Description/Description';
import {memberCancellation} from '../../data';
import {List, Text, TextInput, Wrapper} from './style';
import NextButton from '../../components/login/NextButton/NextButton';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MemberCancellation'>;
  route: RouteProp<MyScreenStackParamList, 'MemberCancellation'>;
}

function MemberCancellationScreen({navigation}: IProps) {
  const [checkbox, setCheckbox] = useState<string[]>([]);
  const isChecked = checkbox.length >= 1;

  function handleSubmit() {
    navigation.navigate('MemberCancellationComplete');
  }

  function handleCheckbox(checked, value) {
    checked
      ? setCheckbox([...checkbox, value])
      : setCheckbox(checkbox.filter(button => button !== value));
  }
  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <Title title="앱 탈퇴 사유" />
      <Description
        description={`Work Us와 함께 해주셔서 감사합니다!
그동안 앱을 이용해주셔서 감사합니다. 
앱 탈퇴 사유를 적어주시면, 
반영하여 더 좋은 서비스를 만들도록 노력하겠습니다. 
저희 앱이 많은 도움이 되셨기를 바라겠습니다.`}
      />
      <Wrapper>
        {memberCancellation.map(item => (
          <List key={item.id}>
            <CheckBox
              style={{
                width: 19.5,
                height: 19.5,
                tintColor: COLORS.GRAY_7,
              }}
              disabled={false}
              value="ㅇㅇ"
              onValueChange={checked => {
                handleCheckbox(checked, item.id);
              }}
              onAnimationType="bounce"
              offAnimationType="bounce"
              onFillColor={COLORS.TWO}
              tintColor={COLORS.GRAY_2}
              onCheckColor={COLORS.GRAY_8}
              onTintColor={COLORS.TWO}
            />
            <Text fontWeight={500} fontSize={15} color={COLORS.GRAY_2}>
              {item.text}
            </Text>
          </List>
        ))}
      </Wrapper>

      <TextInput
        placeholder="탈퇴하시는 이유를 적어주세요"
        placeholderTextColor={COLORS.GRAY_5}
      />
      <NextButton
        text="다음"
        backgroundColor={isChecked ? COLORS.TWO : COLORS.GRAY_7}
        textColor={isChecked ? COLORS.GRAY_1 : COLORS.GRAY_8}
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

export default MemberCancellationScreen;
