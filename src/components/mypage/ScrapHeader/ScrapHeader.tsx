import React from 'react';
import {Pressable} from 'react-native';
import {Text, Wrapper} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  onPress: () => void;
}

function ScrapHeader({onPress}: IProps) {
  return (
    <Wrapper>
      <Pressable onPress={onPress}>
        <FontAwesomeIcon icon={faAngleLeft} size={25} />
      </Pressable>
      <Text>스크랩</Text>
      <Pressable onPress={onPress}>
        <FontAwesomeIcon icon={faEllipsisVertical} size={25} />
      </Pressable>
    </Wrapper>
  );
}

export default ScrapHeader;
