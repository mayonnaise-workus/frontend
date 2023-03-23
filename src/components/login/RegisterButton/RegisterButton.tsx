import React, {useEffect, useState} from 'react';
import {Icon, PressableWrapper, Text} from './style';

interface IRegisterButtonProps {
  title: string;
  id: number;
  width: number;
  height: number;
  icon?: string;
  margin?: boolean;
  checkList: number[];
  setCheckList: React.Dispatch<React.SetStateAction<number[]>>;
}

function RegisterButton(props: IRegisterButtonProps) {
  const {title, id, width, height, icon, margin, checkList, setCheckList} =
    props;
  const [press, setPress] = useState<boolean>(false);

  function handlePress() {
    if (!press) {
      setPress(() => true);
      setCheckList([...checkList, id]);
    } else {
      setPress(() => false);
      setCheckList(checkList.filter(item => item !== id));
    }
  }

  useEffect(() => {
    checkList && checkList.includes(id) && setPress(true);
  }, [checkList, id]);

  return (
    <PressableWrapper
      onPress={() => {
        handlePress();
      }}
      press={press}
      width={width}
      height={height}
      margin={margin ? 10 : 0}>
      {icon && <Icon>{icon}</Icon>}
      <Text>{title}</Text>
    </PressableWrapper>
  );
}

export default RegisterButton;
