import React from 'react';
import {SafeAreaView} from 'react-native';
import images from '../../../../assets/images';
import {ImageBlock, PressableBlock} from './style';

interface IProps {
  onPress: () => void;
}

function HeaderBackButton(props: IProps) {
  const {onPress} = props;

  return (
    <SafeAreaView>
      <PressableBlock onPress={onPress}>
        <ImageBlock source={images.LEFT_ICON} />
      </PressableBlock>
    </SafeAreaView>
  );
}

export default HeaderBackButton;
