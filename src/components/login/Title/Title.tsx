import React from 'react';
import {TextBlock, ViewBlock} from './style';

interface Iprops {
  title: string;
}

function Title(props: Iprops) {
  const {title} = props;

  return (
    <ViewBlock>
      <TextBlock>{title}</TextBlock>
    </ViewBlock>
  );
}

export default Title;
