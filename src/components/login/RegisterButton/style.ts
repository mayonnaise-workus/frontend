import styled from "styled-components";

export const PressableWrapper = styled.Pressable`
  background-color: ${({press}) => (press ? '#FFF9E8' : '#F4F5F7')};
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
  margin-bottom: ${({top}) => `${top}px`};
  margin-right: ${({top}) => `${top}px`};
  border-color: ${({press}) => (press ? '#FFCF54' : null)};
  border-radius: 10px;
  justify-content: center;
`;

export const Icon = styled.Text`
  text-align: center;
  bottom: 7;
`;
export const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;