import React from 'react';
import {Image} from 'react-native';
import COLORS from '../../../../packages/colors';
import {Alert, AlertView} from './style';

interface IProps {
  message: string;
}

function AlertMessage(props: IProps) {
  const {message} = props;

  return (
    <AlertView>
      <Image
        style={{
          tintColor: COLORS.ALERT_1,
          width: 19.5,
          height: 19.5,
        }}
        source={require('/Users/sein/Desktop/frontend/assets/WarningCircle.png')}
      />
      <Alert color={COLORS.ALERT_2}>{message}</Alert>
    </AlertView>
  );
}

export default AlertMessage;
