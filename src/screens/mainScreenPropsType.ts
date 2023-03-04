import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackNavigationProps} from '../App';

export type MainStackParamList = {
  Home: undefined;
  Magazine: undefined;
  My: undefined;
};

type NavigationProps<T extends keyof MainStackParamList = 'Home'> =
  NativeStackNavigationProp<MainStackParamList, T>;

export type MainStackNavigationProps<
  T extends keyof MainStackParamList = 'Home',
> = CompositeNavigationProp<
  NavigationProps<T>,
  RootStackNavigationProps<'MainNavigator'>
>;

export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

export type MagazineProps = NativeStackScreenProps<
  MainStackParamList,
  'Magazine'
>;

export type MyProps = NativeStackScreenProps<MainStackParamList, 'My'>;
