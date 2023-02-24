import React from 'react';
import COLORS from '../../../../packages/colors';
import {Text, ViewBlock} from './style';

interface IProps {
  description: string;
}

function Description(props: IProps) {
  const {description} = props;
  return (
    <ViewBlock>
      <Text color={COLORS.GRAY_3}>{description}</Text>
    </ViewBlock>
  );
}

export default Description;
