import React from 'react';
import {Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {Container} from './style';

interface IProps {
  onPress: () => void;
}

function HeaderBackButton(props: IProps) {
  const {onPress} = props;

  return (
    <Container>
      <Pressable onPress={onPress}>
        <FontAwesomeIcon icon={faAngleLeft} size={25} />
      </Pressable>
    </Container>
  );
}

export default HeaderBackButton;
