import styled from "styled-components";

export const ViewBlock = styled.View`
  position: absolute;
  width: 350px;
  height: 84px;
  left: 20px;
  top: 143px;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${({color}) => color};
`;