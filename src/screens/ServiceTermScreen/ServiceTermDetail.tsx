import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import serviceTermSelectLogic from './ServiceTermSelectLogic';
import {
  ServiceTermDetailContainer,
  ServiceTermDetailText,
  ViewContainer,
} from './style';

interface Props {
  navigation: IntroStackNavigationProps<'ServiceTermDetail'>;
  route: RouteProp<IntroStackParamList, 'ServiceTermDetail'>;
}

const ServiceTermDetail = ({navigation, route}: Props) => {
  const {property, number, title} = route.params;
  const serviceTerms = serviceTermSelectLogic(property, number);

  return (
    <Wrapper>
      <OnboardingHeader text={title} goback={navigation.goBack} />
      <ViewContainer>
        {serviceTerms.map((serviceTerm, index) => (
          <ServiceTermDetailContainer key={index}>
            <ServiceTermDetailText>제 {index + 1}항</ServiceTermDetailText>
            <ServiceTermDetailText>{serviceTerm}</ServiceTermDetailText>
          </ServiceTermDetailContainer>
        ))}
      </ViewContainer>
    </Wrapper>
  );
};

export default ServiceTermDetail;
