import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

function OnboardingHeader({text, goback}: {text: string; goback: () => void}) {
  return (
    <HeaderContainer>
      <Pressable onPress={() => goback()}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size={25}
          style={{marginBottom: 15}}
        />
      </Pressable>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex: 1;
  margin-bottom: 35px;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
`;

export default OnboardingHeader;
