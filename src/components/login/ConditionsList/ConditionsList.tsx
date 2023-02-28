import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {termList} from '../../../data';
import COLORS from '../../../../packages/colors';
import {Container, List, ListWrapper, Text, Wrapper} from './style';

function ConditionsList({requiredCheck, setRequiredCheck}) {
  const data = [
    'check1',
    'check2',
    'check3',
    'check4',
    'check5',
    'personal',
    'marketing',
  ];
  function handlerCheckbox(checked, value) {
    checked
      ? setRequiredCheck([...requiredCheck, value])
      : setRequiredCheck(requiredCheck.filter(button => button !== value));
  }
  function handlerCheckAll(checked, value) {
    checked ? setRequiredCheck(value) : setRequiredCheck([]);
  }
  return (
    <Container>
      <Wrapper>
        <CheckBox
          style={{
            width: 19.5,
            height: 19.5,
            tintColor: COLORS.GRAY_7,
          }}
          disabled={false}
          value={requiredCheck.length === 7 ? true : false}
          onValueChange={checked => {
            handlerCheckAll(checked, data);
          }}
          onAnimationType="bounce"
          offAnimationType="bounce"
          onFillColor={COLORS.TWO}
          tintColor={COLORS.GRAY_2}
          onCheckColor={COLORS.GRAY_8}
          onTintColor={COLORS.TWO}
        />
        <Text fontWeight={600} fontSize={16} color={COLORS.GRAY_2}>
          전체 동의 (선택 정보 포함)
        </Text>
      </Wrapper>
      <ListWrapper>
        {termList.map(item => (
          <List key={item.id}>
            <CheckBox
              style={{
                width: 19.5,
                height: 19.5,
                tintColor: COLORS.GRAY_7,
                onCheckColor: COLORS.ZERO,
                onAnimationType: 'bounce',
              }}
              value={requiredCheck.includes(`${item.value}`) ? true : false}
              onValueChange={checked =>
                handlerCheckbox(checked, `${item.value}`)
              }
              onAnimationType="bounce"
              offAnimationType="bounce"
              onCheckColor={COLORS.TWO}
              onTintColor={COLORS.GRAY_8}
              tintColor={COLORS.GRAY_2}
            />
            <Text fontWeight={500} fontSize={15} color={COLORS.GRAY_2}>
              {item.text}
            </Text>
          </List>
        ))}
      </ListWrapper>
    </Container>
  );
}

export default ConditionsList;
