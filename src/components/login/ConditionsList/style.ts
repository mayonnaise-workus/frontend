import styled from "styled-components";

export const List = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;
export const Container = styled.View`
  left: 22px;
  top: 110px;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
`;

export const Text = styled.Text`
  margin-left: 6.25px;
  font-weight: ${({fontWeight}) => fontWeight};
  font-size: ${({fontSize}) => fontSize};
  color: ${({color}) => color};
`;

export const ListWrapper = styled.View`
  top: 26.5px;
`;