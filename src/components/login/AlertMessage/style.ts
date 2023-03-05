import styled from 'styled-components/native';

export const AlertView = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

interface IAlertProps {
  color: string;
}

export const Alert = styled.Text<IAlertProps>`
  color: ${({color}) => color};
  font-weight: 400;
  font-size: 14px;
  margin-left: 6px;
  top: 1.5px;
`;
