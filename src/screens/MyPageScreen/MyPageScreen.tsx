import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from '../../components/login/mypage/Button';
import NickName from '../../components/login/mypage/NickName';
import ScrapButton from '../../components/login/mypage/ScrapButton';
import {Wrapper} from './style';

interface IProps {
  navigation: undefined;
}

function MyPageScreen(props: IProps) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <NickName navigation={navigation} />
      <ScrapButton navigation={navigation} />
      <Wrapper>
        <Button title="알림 설정" />
        <Button title="이용 약관" />
        <Button title="이용 방법" />
      </Wrapper>
    </SafeAreaView>
  );
}
export default MyPageScreen;
