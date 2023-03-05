import React from 'react';
import styled from 'styled-components/native';

const WholeContainer = styled.SafeAreaView`
  flex: 1;
`;

const WrapperContainer = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
`;

function Wrapper({children}: React.PropsWithChildren) {
  return (
    <WholeContainer>
      <WrapperContainer>{children}</WrapperContainer>
    </WholeContainer>
  );
}

export default Wrapper;
