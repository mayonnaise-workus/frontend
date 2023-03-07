import React from 'react';
import styled from 'styled-components/native';
import images from '../../../assets/images';

const LogoContainer = styled.View`
  flex-direction: row;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  margin-bottom: 20px;
`;

const EmptyView = styled.View`
  width: 20px;
  height: 20px;
`;

const Logo = styled.Image`
  width: 20px;
  height: 20px;
`;

const Bell = styled.Image`
  width: 17.85px;
  height: 20.25px;
`;

function MainHeader() {
  return (
    <LogoContainer>
      <EmptyView />
      <Logo source={images.HEADER_LOGO} />
      <Bell source={images.BELL} />
    </LogoContainer>
  );
}

export default MainHeader;
