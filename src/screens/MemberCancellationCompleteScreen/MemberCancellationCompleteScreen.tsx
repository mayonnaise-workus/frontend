import React from 'react';
import {SafeAreaView} from 'react-native';
import images from '../../../assets/images';
import {Image, Message, Pressable, Text, X} from './style';

interface IProps {
  navigation: undefined;
}

function MemberCancellationCompleteScreen(props: IProps) {
  const {navigation} = props;

  function handlePress() {
    navigation.navigate('Onboarding');
  }

  return (
    <SafeAreaView>
      <Pressable onPress={handlePress}>
        <X source={images.X} />
      </Pressable>
      <Image source={images.LOGO} />
      <Text>회원 탈퇴가 완료 되었습니다.</Text>
      <Message>
        {`회원으로 함께해 주셔서 감사합니다! 
서비스 이용이 도움이 되셨기를 바랍니다. 
앞으로도 많은 응원 부탁드리고
필요하실 때 돌아오실 수 있도록 더 노력하겠습니다.`}
      </Message>
    </SafeAreaView>
  );
}

export default MemberCancellationCompleteScreen;
