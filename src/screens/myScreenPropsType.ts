import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {IntroStackNavigationProps} from './introScreenPropsType';
import {MainStackNavigationProps} from './mainScreenPropsType';

export type MyScreenStackParamList = {
  MyPage: undefined;
  Scrap: undefined;
  EditProfile: undefined;
  MemberCancellation: undefined;
  MemberCancellationComplete: undefined;
};

type MyScreenProps<T extends keyof MyScreenStackParamList = 'MyPage'> =
  NativeStackNavigationProp<MyScreenStackParamList, T>;

export type MyScreenStackNavigationProps<
  T extends keyof MyScreenStackParamList = 'MyPage',
> = CompositeNavigationProp<
  MyScreenProps<T>,
  CompositeNavigationProp<
    MainStackNavigationProps<'My'>,
    IntroStackNavigationProps<'OnBoarding'>
  >
>;

export type MyPageProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'MyPage'
>;

export type ScrapProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'Scrap'
>;

export type EditProfileProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'EditProfile'
>;

export type MemberCancellationProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'MemberCancellation'
>;

export type MemberCancellationCompleteProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'MemberCancellationComplete'
>;
