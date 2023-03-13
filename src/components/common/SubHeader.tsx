import React from 'react';
import styled from 'styled-components/native';
import images from '../../../assets/images';

const LogoContainer = styled.View`
  flex-direction: row;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 11px;
  margin-bottom: 11px;
`;

const Logo = styled.Image`
  width: 20px;
  height: 20px;
`;

function SubHeader() {
  return (
    <LogoContainer>
      <Logo source={images.HEADER_LOGO} />
    </LogoContainer>
  );
}

export default SubHeader;
