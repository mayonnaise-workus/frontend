import styled from 'styled-components/native';

export const ViewBlock = styled.View`
  flex: 1.2;
  padding-bottom: 15px;
`;

interface ITextProps {
  color: string;
}

export const Text = styled.Text<ITextProps>`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: ${({color}) => color};
`;
