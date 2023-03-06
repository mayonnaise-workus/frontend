import React from 'react';
import styled from 'styled-components/native';
import {StatusBar, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const WrapperContainer = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
`;

function Wrapper({children}: React.PropsWithChildren) {
  const {top} = useSafeAreaInsets();

  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom']}>
      <View style={{backgroundColor: 'white', height: top}} />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <WrapperContainer>{children}</WrapperContainer>
    </SafeAreaView>
  );
}

export default Wrapper;
