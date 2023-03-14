import React from 'react';
import {RouteProp} from '@react-navigation/native';
import images from '../../../assets/images';
import {
  Container,
  ContentContainer,
  Image,
  Message,
  Pressable,
  Text,
  X,
} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import RNRestart from 'react-native-restart';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MemberCancellationComplete'>;
  route: RouteProp<MyScreenStackParamList, 'MemberCancellationComplete'>;
}

function MemberCancellationCompleteScreen({navigation}: IProps) {
  async function clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  }
  async function initAsyncStorage() {
    try {
      await AsyncStorage.getAllKeys();
    } catch (error) {}
  }
  async function handlePress() {
    await initAsyncStorage();
    await clearAsyncStorage();
    RNRestart.restart();
    navigation.navigate('OnBoarding');
  }

  return (
    <Container>
      <Pressable onPress={handlePress}>
        <X source={images.X} />
      </Pressable>
      <ContentContainer>
        <Image source={images.LOGO} />
        <Text>회원 탈퇴가 완료 되었습니다.</Text>
        <Message>
          {`회원으로 함께해 주셔서 감사합니다! 
서비스 이용이 도움이 되셨기를 바랍니다. 
앞으로도 많은 응원 부탁드리고
필요하실 때 돌아오실 수 있도록 더 노력하겠습니다.`}
        </Message>
      </ContentContainer>
    </Container>
  );
}

export default MemberCancellationCompleteScreen;
