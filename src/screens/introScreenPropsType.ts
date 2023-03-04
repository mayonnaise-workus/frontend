import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackNavigationProps} from '../App';

export type IntroStackParamList = {
  OnBoarding: undefined;
  ServiceTerm: undefined;
  RegisterNickname: undefined;
  RegisterRegion: undefined;
  RegisterPurpose: undefined;
  RegisterWorkspace: undefined;
};

type NavigationProps<T extends keyof IntroStackParamList = 'OnBoarding'> =
  NativeStackNavigationProp<IntroStackParamList, T>;

export type IntroStackNavigationProps<
  T extends keyof IntroStackParamList = 'OnBoarding',
> = CompositeNavigationProp<
  NavigationProps<T>,
  RootStackNavigationProps<'IntroNavigator'>
>;

export type OnBoardingProps = NativeStackScreenProps<
  IntroStackParamList,
  'OnBoarding'
>;

export type ServiceTermProps = NativeStackScreenProps<
  IntroStackParamList,
  'ServiceTerm'
>;

export type RegisterNicknameProps = NativeStackScreenProps<
  IntroStackParamList,
  'RegisterNickname'
>;

export type RegisterRegionProps = NativeStackScreenProps<
  IntroStackParamList,
  'RegisterRegion'
>;

export type RegisterPurposeProps = NativeStackScreenProps<
  IntroStackParamList,
  'RegisterPurpose'
>;

export type RegisterWorkspaceProps = NativeStackScreenProps<
  IntroStackParamList,
  'RegisterWorkspace'
>;
