import React, {useCallback, useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import {
  Container,
  EmptyView,
  Header,
  Title,
  Image,
  ContentContainer,
  FirstLineContainer,
  Description,
  DescriptionContainer,
  DetailTagRow,
  DetailTag,
  URLContainer,
  URLTitleContainer,
  GrayLogo,
  URLTitle,
  DetailTagContent,
  ScrollViewContainer,
  MapContainer,
  ImageContainer,
  BookMark,
  LogoImage,
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {Linking, Platform, Pressable} from 'react-native';
import images from '../../../assets/images';
import Button from '../../components/login/NextButton/NextButton';
import COLORS from '../../../packages/colors';
import {useDispatch, useSelector} from 'react-redux';
import {GetDetailWorkspaceApi} from '../../redux/service/GetDetailWorkspaceApi';
import {RootState} from '../../redux/store/store';
import MapView, {Marker} from 'react-native-maps';
import {WorkSpaceListApi} from '../../redux/service/WorkSpaceListApi';
import {DeleteFavoriteWorkSpaces} from '../../redux/service/DeleteFavoriteWorkSpaces';
import {FavoriteWorkSpaces} from '../../redux/service/FavoriteWorkSpaces';

interface IScrapDetailProps {
  navigation: MyScreenStackNavigationProps<'ScrapDetail'>;
  route: RouteProp<MyScreenStackParamList, 'ScrapDetail'>;
}

const ScrapDetailScreen = ({navigation, route}: IScrapDetailProps) => {
  const {
    id,
    name,
    address,
    image,
    latitude,
    longitude,
    selectedObj,
    selectedWorkspace,
    selectedCapacity,
  } = route.params;

  const dispatch = useDispatch();
  useEffect(() => {
    GetDetailWorkspaceApi(id)(dispatch);
    WorkSpaceListApi()(dispatch);
  }, [dispatch, id]);
  const {data: scrapList} = useSelector(
    (state: RootState) => state.workspacelist,
  );
  const [workSpaceList, setWorkSpaceList] = useState<Array<[string, object]>>(
    [],
  );
  const [favorite, setFavorite] = useState<boolean>(false);
  const {data} = useSelector((state: RootState) => state.detailworkspace);
  const [contact, setContact] = useState('');
  const [kakaomap, setKakaomap] = useState('');
  const [navermap, setNavermap] = useState('');

  useEffect(() => {
    if (scrapList) {
      setWorkSpaceList(scrapList.list);
    }
  }, [scrapList, favorite]);

  useEffect(() => {
    workSpaceList &&
      workSpaceList.length >= 1 &&
      setFavorite(workSpaceList.some(obj => obj.id === id));
  }, [favorite, id, workSpaceList]);

  useEffect(() => {
    if (data.name.length) {
      setContact(() => {
        return data.contact;
      });
      setKakaomap(() => {
        return data.kakao_url;
      });
      setNavermap(() => {
        return data.naver_url;
      });
    }
  }, [data]);

  async function DeleteScrap(id: number) {
    await DeleteFavoriteWorkSpaces(id)(dispatch);
    setFavorite(false);
    const newWorkSpaceList = await WorkSpaceListApi()(dispatch);
    if (newWorkSpaceList?.scrapList?.list) {
      setWorkSpaceList(newWorkSpaceList.scrapList.list);
    }
  }

  async function AddScrap(id: number) {
    await FavoriteWorkSpaces(id)(dispatch);
    setFavorite(true);

    const newWorkSpaceList = await WorkSpaceListApi()(dispatch);
    if (newWorkSpaceList?.scrapList?.list) {
      setWorkSpaceList(newWorkSpaceList.scrapList.list);
    }
  }

  const isIOS = Platform.OS === 'ios';

  const onNaverPress = useCallback(async () => {
    const supported = await Linking.canOpenURL(navermap);

    if (supported) {
      await Linking.openURL(navermap);
    } else {
      if (isIOS) {
        await Linking.openURL(
          'https://apps.apple.com/us/app/naver-map-navigation/id311867728',
        );
      } else {
        await Linking.openURL(
          'https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko&gl=US',
        );
      }
    }
  }, [isIOS, navermap]);

  const onKakaoPress = useCallback(async () => {
    const supported = await Linking.canOpenURL(kakaomap);

    if (supported) {
      await Linking.openURL(kakaomap);
    } else {
      if (isIOS) {
        await Linking.openURL(
          'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-no-1-%EC%A7%80%EB%8F%84%EC%95%B1/id304608425',
        );
      } else {
        await Linking.openURL(
          'https://play.google.com/store/apps/details?id=net.daum.android.map&hl=ko&gl=US&pli=1',
        );
      }
    }
  }, [isIOS, kakaomap]);

  return (
    <Container>
      <ScrollViewContainer contentContainerStyle={{minHeight: 1000}}>
        <Header>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faAngleLeft} size={25} />
          </Pressable>
          <Title>{name}</Title>
          <EmptyView />
        </Header>
        <ImageContainer>
          <Image source={image ? {uri: image} : images.SAMPLE_PLACE_IMAGE} />
        </ImageContainer>
        <ContentContainer>
          <FirstLineContainer>
            <Title>{name}</Title>
            <BookMark>
              {favorite ? (
                <Pressable onPress={() => DeleteScrap(id)}>
                  <LogoImage source={images.BOOKMARK_YELLOW_ICON} />
                </Pressable>
              ) : (
                <Pressable onPress={() => AddScrap(id)}>
                  <LogoImage source={images.BOOKMARK_GRAY} />
                </Pressable>
              )}
            </BookMark>
          </FirstLineContainer>
          <DescriptionContainer>
            <Description>{address}</Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <Description>{contact}</Description>
          </DescriptionContainer>
          <DetailTagRow>
            <DetailTag>
              <DetailTagContent>{selectedObj}</DetailTagContent>
            </DetailTag>
            <DetailTag>
              <DetailTagContent>{selectedWorkspace}</DetailTagContent>
            </DetailTag>
            <DetailTag>
              <DetailTagContent>{selectedCapacity}</DetailTagContent>
            </DetailTag>
          </DetailTagRow>
        </ContentContainer>
        <URLContainer>
          <URLTitleContainer>
            <GrayLogo source={images.GRAY_LOGO} />
            <URLTitle>???????????? ????????????</URLTitle>
          </URLTitleContainer>
          <Button
            text="????????? ?????? ????????????"
            backgroundColor={COLORS.FOUR}
            textColor="black"
            onPress={onNaverPress}
          />
          <Button
            text="????????? ?????? ????????????"
            backgroundColor={COLORS.FOUR}
            textColor="black"
            onPress={onKakaoPress}
          />
        </URLContainer>
        <MapContainer>
          <MapView
            style={{
              width: '100%',
              height: '100%',
            }}
            region={{
              latitude,
              longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}>
            <Marker
              coordinate={{
                latitude,
                longitude,
              }}
              title={name}
              image={images.BLACK_LOGO}
            />
          </MapView>
        </MapContainer>
      </ScrollViewContainer>
    </Container>
  );
};

export default ScrapDetailScreen;
