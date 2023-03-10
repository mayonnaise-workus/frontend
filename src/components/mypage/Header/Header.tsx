import React from 'react';
import {Pressable} from 'react-native';
import {EmptyView, Text, Wrapper} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  onPress: () => void;
  title: string;
}

function Header({onPress, title}: IProps) {
  return (
    <Wrapper>
      <Pressable onPress={onPress}>
        <FontAwesomeIcon icon={faAngleLeft} size={25} />
      </Pressable>
      <Text>{title}</Text>
      <EmptyView />
    </Wrapper>
  );
}

export default Header;
