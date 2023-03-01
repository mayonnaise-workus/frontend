import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from '../../components/mypage/Button/Button';
import NickName from '../../components/mypage/Nickname/NickName';
import ScrapButton from '../../components/mypage/ScrapButton/ScrapButton';
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
