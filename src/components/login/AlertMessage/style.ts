import styled from "styled-components";

export const AlertView = styled.View`
  position: absolute;
  flex-direction: row;
  height: 20px;
  left: 20px;
  top: 233px;
`;
export const Alert = styled.Text`
  color: ${({color}) => color};
  font-weight: 400;
  font-size: 14px;
  margin-left: 6px;
  top: 1.5px;
`;