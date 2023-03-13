import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainStackNavigationProps} from './mainScreenPropsType';

export type MagazineScreenStackParamList = {
  MagazineMain: undefined;
  MagazineDetail: undefined;
};

type MagazineScreenProps<
  T extends keyof MagazineScreenStackParamList = 'MagazineMain',
> = NativeStackNavigationProp<MagazineScreenStackParamList, T>;

export type MagazineScreenStackNavigationProps<
  T extends keyof MagazineScreenStackParamList = 'MagazineMain',
> = CompositeNavigationProp<
  MagazineScreenProps<T>,
  MainStackNavigationProps<'Magazine'>
>;

export type MagazineMainProps = NativeStackScreenProps<
  MagazineScreenStackParamList,
  'MagazineMain'
>;

export type MagazineDetailProps = NativeStackScreenProps<
  MagazineScreenStackParamList,
  'MagazineDetail'
>;
