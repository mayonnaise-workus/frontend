import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 3;
`;

export const Pressable = styled.Pressable`
  margin-top: 15px;
`;

interface ITextProps {
  color: string;
}

export const Text = styled.Text<ITextProps>`
  font-weight: 600;
  font-size: 16px;
  color: ${({color}) => color};
`;
