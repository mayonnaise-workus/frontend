import React from 'react';
import styled from 'styled-components/native';

const WrapperContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const ViewContainer = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

function Wrapper({children}: React.PropsWithChildren) {
  return (
    <WrapperContainer style={{flex: 1}} edges={['bottom']}>
      <ViewContainer>{children}</ViewContainer>
    </WrapperContainer>
  );
}

export default Wrapper;
