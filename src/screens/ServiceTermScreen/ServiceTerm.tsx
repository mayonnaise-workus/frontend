import React from 'react';
import {View, Pressable} from 'react-native';
import {Row, AllAgreeRow, Text, Group} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {obligations} from '../../data';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type IObligationProps = {
  agreementCheck: string[];
  setAgreementCheck: React.Dispatch<React.SetStateAction<string[]>>;
  obligationCheck: string[];
  setObligationCheck: React.Dispatch<React.SetStateAction<string[]>>;
  navigate: any;
};

const Agreement = ({
  agreementCheck,
  setAgreementCheck,
  obligationCheck,
  setObligationCheck,
  navigate,
}: IObligationProps) => {
  return (
    <View>
      <AllAgreeRow>
        <Group>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            disableBuiltInState
            isChecked={agreementCheck.length === 2 ? true : false}
            onPress={(isChecked: boolean) => {
              if (!isChecked && agreementCheck.length === 2) {
                setAgreementCheck(() => []);
                setObligationCheck(() => []);
              } else {
                setAgreementCheck(['obligation1', 'obligation2']);
                setObligationCheck(['obligation1', 'obligation2']);
              }
            }}
          />
          <Text>전체 동의 </Text>
        </Group>
      </AllAgreeRow>
      {obligations.map(obligation => (
        <Row key={obligation.id}>
          <Group>
            <BouncyCheckbox
              size={25}
              fillColor="#FFCF54"
              unfillColor="white"
              disableBuiltInState
              isChecked={
                obligationCheck.includes(obligation.value) ? true : false
              }
              onPress={(isChecked: boolean) => {
                if (!isChecked && obligationCheck.includes(obligation.value)) {
                  setObligationCheck(prev => {
                    const newArray = [...prev];
                    newArray.splice(newArray.indexOf(obligation.value), 1);
                    return newArray;
                  });
                  setAgreementCheck(prev => {
                    const newArray = [...prev];
                    newArray.splice(newArray.indexOf(obligation.value), 1);
                    return newArray;
                  });
                } else {
                  setObligationCheck(prev => [...prev, obligation.value]);
                  setAgreementCheck(prev => [...prev, obligation.value]);
                }
              }}
            />
            <Text>{obligation.text}</Text>
          </Group>
          <Pressable
            onPress={() => {
              navigate('ServiceTermDetail', {
                property: 'obligation',
                number: obligation.id,
                title: obligation.text,
              });
            }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </Row>
      ))}
    </View>
  );
};

export default Agreement;
