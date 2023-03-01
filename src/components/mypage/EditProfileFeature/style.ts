import styled from 'styled-components';

export const Pressable = styled.Pressable`
  margin-top: 30px;
`;

export const Block = styled.View`
  left: 20px;
  top: 200px;
`;
export const Text = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${({color}) => color};
`;
