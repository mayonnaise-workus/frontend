import styled from 'styled-components/native';

export const PressableBlock = styled.Pressable`
  width: 350px;
  height: 60px;
  left: 20px;
  margin-bottom: 12px;
  background-color: ${(props: {backgroundColor: string}) =>
    props.backgroundColor};
  border-radius: 10px;
  justify-content: center;
`;

export const TextBlock = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  color: ${(props: {textColor: string}) => props.textColor};
`;
