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
  data: string[];
  setData: Dispatch<SetStateAction<string[]>>;
}

function RegisterButton(props: IProps) {
  const {title, id, width, height, top, icon, data, setData} = props;
  const [press, setPress] = useState<boolean>(false);
  console.log(data);
  function handlePress() {
    setPress(!press);
  }

  useEffect(() => {
    press
      ? setData([...data, {id: id, title: title}])
      : setData(data.filter(item => item.id !== id));
  }, [press]);

  console.log('data', data);

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
