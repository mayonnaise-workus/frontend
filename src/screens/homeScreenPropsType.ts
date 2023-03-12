import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainStackNavigationProps} from './mainScreenPropsType';

export type HomeScreenStackParamList = {
  HomeMain: undefined;
  HomeDetail: {
    id: number;
    name: string;
    address: string;
    selectedObj: string;
    selectedWorkspace: string;
    selectedCapacity: string;
  };
};

type HomeScreenProps<T extends keyof HomeScreenStackParamList = 'HomeMain'> =
  NativeStackNavigationProp<HomeScreenStackParamList, T>;

export type HomeScreenStackNavigationProps<
  T extends keyof HomeScreenStackParamList = 'HomeMain',
> = CompositeNavigationProp<
  HomeScreenProps<T>,
  MainStackNavigationProps<'Home'>
>;

export type HomeMainProps = NativeStackScreenProps<
  HomeScreenStackParamList,
  'HomeMain'
>;

export type HomeDetailProps = NativeStackScreenProps<
  HomeScreenStackParamList,
  'HomeDetail'
>;
