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
  ScrapDetail: {
    id: number;
    name: string;
    image: string;
    address: string;
    latitude: number;
    longitude: number;
    selectedObj: string;
    selectedWorkspace: string;
    selectedCapacity: string;
  };
  EditProfile: undefined;
  MemberCancellation: undefined;
  MemberCancellationComplete: undefined;
  MyServiceTerm: undefined;
  RegionSetting: undefined;
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

export type ScrapDetailProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'ScrapDetail'
>;

export type RegionSettingProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'RegionSetting'
>;

export type MyServiceTermProps = NativeStackScreenProps<
  MyScreenStackParamList,
  'MyServiceTerm'
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
