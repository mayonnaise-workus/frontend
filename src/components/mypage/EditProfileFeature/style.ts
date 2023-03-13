import styled from 'styled-components/native';

export const Container = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  flex: 3;
`;

export const Pressable = styled.Pressable`
  margin-top: 5px;
  padding-bottom: 10px;
`;

interface ITextProps {
  color: string;
}

export const Text = styled.Text<ITextProps>`
  font-weight: 600;
  font-size: 16px;
  color: ${({color}) => color};
`;
