import React from 'react';
import {SafeAreaView} from 'react-native';
import {ImageBlock, PressableBlock} from './style';

interface IProps {
  onPress: () => void;
}

function HeaderBackButton(props: IProps) {
  const {onPress} = props;

  return (
    <SafeAreaView>
      <PressableBlock onPress={onPress}>
        <ImageBlock
          source={require('/Users/sein/Desktop/frontend/assets/CaretLeft.png')}
        />
      </PressableBlock>
    </SafeAreaView>
  );
}

export default HeaderBackButton;
