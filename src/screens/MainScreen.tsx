import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import HeaderBackButton from '../components/login/HeaderBackbutton/HeaderBackButton';

interface IProps {
  navigation: undefined;
}
function MainScreen(props: IProps) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <HeaderBackButton onPress={() => navigation.popToTop()} />
      <Text style={styles.block}>메인 화면</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    top: 60,
    left: 30,
    fontSize: 30,
  },
});

export default MainScreen;
