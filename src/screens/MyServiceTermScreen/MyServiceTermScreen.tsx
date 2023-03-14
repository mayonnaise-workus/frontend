import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Linking, Pressable, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Wrapper from '../../components/common/Wrapper';
import {obligations} from '../../data';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import {Group, ServiceTermContainer, Row} from '../ServiceTermScreen/style';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MyServiceTerm'>;
  route: RouteProp<MyScreenStackParamList, 'MyServiceTerm'>;
}

function MyServiceTermScreen({navigation}: IProps) {
  const handlePress = (url: string) => {
    Linking.openURL(`${url}`);
  };

  return (
    <Wrapper>
      <OnboardingHeader text="이용 약관" goback={navigation.goBack} />
      <ServiceTermContainer>
        {obligations.map(obligation => (
          <Row key={obligation.id}>
            <Group>
              <BouncyCheckbox
                size={25}
                fillColor="#FFCF54"
                unfillColor="white"
                disableBuiltInState
                isChecked={true}
              />
              <Text>{obligation.text}</Text>
            </Group>
            <Pressable
              onPress={() => {
                handlePress(obligation.url);
              }}>
              <FontAwesomeIcon icon={faAngleRight} />
            </Pressable>
          </Row>
        ))}
      </ServiceTermContainer>
    </Wrapper>
  );
}

export default MyServiceTermScreen;
