import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import COLORS from '../../../../packages/colors';
import {Icon, PressableWrapper, Text} from './style';

interface IProps {
  title: string;
  id: number;
  width: number;
  height: number;
  top: number;
  icon: string;
  checkList: string[];
  setCheckList: Dispatch<SetStateAction<string[]>>;
}

function RegisterButton(props: IProps) {
  const {title, id, width, height, top, icon, checkList, setCheckList} = props;
  const [press, setPress] = useState<boolean>(false);

  function handlePress() {
    setPress(!press);
  }

  useEffect(() => {
    press
      ? setCheckList([...checkList, id])
      : setCheckList(checkList.filter(item => item !== id));
  }, [press]);

  return (
    <PressableWrapper
      onPress={handlePress}
      press={press}
      backgroundColor={COLORS.GRAY_8}
      pressColor={COLORS.TWO}
      width={width}
      height={height}
      top={top}>
      {icon && <Icon>{icon}</Icon>}
      <Text>{title}</Text>
    </PressableWrapper>
  );
}

export default RegisterButton;
