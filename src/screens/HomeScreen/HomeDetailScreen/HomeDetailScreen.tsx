import React, {useCallback, useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  HomeScreenStackNavigationProps,
  HomeScreenStackParamList,
} from '../../homeScreenPropsType';
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
  TitleContainer,
  GrayLogo,
  TitleContainerText,
  DetailTagContent,
  ScrollViewContainer,
  MapContainer,
  ImageContainer,
  BookMark,
  LogoImage,
  AspectContainer,
  DetailContainer,
  EachDetail,
  DetailTitle,
  DetailContent,
  SponsorImageContainer,
  SponsorImage,
  SponsorDetail,
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {Linking, Platform, Pressable, ScrollView} from 'react-native';
import images from '../../../../assets/images';
import Button from '../../../components/login/NextButton/NextButton';
import COLORS from '../../../../packages/colors';
import {useDispatch, useSelector} from 'react-redux';
import {GetDetailWorkspaceApi} from '../../../redux/service/GetDetailWorkspaceApi';
import {RootState} from '../../../redux/store/store';
import MapView, {Marker} from 'react-native-maps';
import {WorkSpaceListApi} from '../../../redux/service/WorkSpaceListApi';
import {DeleteFavoriteWorkSpaces} from '../../../redux/service/DeleteFavoriteWorkSpaces';
import {FavoriteWorkSpaces} from '../../../redux/service/FavoriteWorkSpaces';

interface IHomeDetailProps {
  navigation: HomeScreenStackNavigationProps<'HomeDetail'>;
  route: RouteProp<HomeScreenStackParamList, 'HomeDetail'>;
}

const HomeDetail = ({navigation, route}: IHomeDetailProps) => {
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
  const [sponsor, setSponsor] = useState(false);

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
      if (data.sponsor) {
        setSponsor(() => true);
      }
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
          </DetailTagRow>
          <DetailTagRow>
            <DetailTag>
              <DetailTagContent>{selectedCapacity}</DetailTagContent>
            </DetailTag>
          </DetailTagRow>
        </ContentContainer>
        {sponsor && (
          <AspectContainer>
            <TitleContainer>
              <GrayLogo source={images.GRAY_LOGO} />
              <TitleContainerText>스페이스 특징</TitleContainerText>
            </TitleContainer>
            <ScrollView
              horizontal
              contentContainerStyle={{alignItems: 'center', gap: 10}}>
              <DetailContainer>
                <EachDetail>
                  <DetailTitle>운영 시간</DetailTitle>
                  <DetailContent>월 ~ 금: 11:00 ~ 20:00</DetailContent>
                  <DetailContent>토, 일, 공휴일:</DetailContent>
                  <DetailContent>11:00 ~ 20:00</DetailContent>
                </EachDetail>
                <EachDetail>
                  <DetailTitle>주차</DetailTitle>
                  <DetailContent>건물 1층 주차장 이용</DetailContent>
                </EachDetail>
                <EachDetail>
                  <DetailTitle>화장실</DetailTitle>
                  <DetailContent>남자 화장실, 여자 화장실</DetailContent>
                  <DetailContent>건물 2층</DetailContent>
                </EachDetail>
              </DetailContainer>
              <SponsorImageContainer>
                <SponsorImage source={images.SPONSOR_1} />
                <SponsorDetail>
                  <DetailTitle>지하 1층 라운지 좌석</DetailTitle>
                  <DetailTagRow>
                    <DetailTag>
                      <DetailContent>좌석이 넓어요</DetailContent>
                    </DetailTag>
                    <DetailTag>
                      <DetailContent>자리가 편해요</DetailContent>
                    </DetailTag>
                  </DetailTagRow>
                  <DetailTagRow>
                    <DetailTag>
                      <DetailContent>편안한 분위기에요</DetailContent>
                    </DetailTag>
                  </DetailTagRow>
                </SponsorDetail>
              </SponsorImageContainer>
              <SponsorImageContainer>
                <SponsorImage source={images.SPONSOR_2} />
                <SponsorDetail>
                  <DetailTitle>지하 1층</DetailTitle>
                  <DetailTagRow>
                    <DetailTag>
                      <DetailContent>좌석이 넓어요</DetailContent>
                    </DetailTag>
                    <DetailTag>
                      <DetailContent>콘센트가 많아요</DetailContent>
                    </DetailTag>
                  </DetailTagRow>
                  <DetailTagRow>
                    <DetailTag>
                      <DetailContent>집중하기 좋아요</DetailContent>
                    </DetailTag>
                  </DetailTagRow>
                </SponsorDetail>
              </SponsorImageContainer>
            </ScrollView>
          </AspectContainer>
        )}
        <URLContainer>
          <TitleContainer>
            <GrayLogo source={images.GRAY_LOGO} />
            <TitleContainerText>스페이스 바로가기</TitleContainerText>
          </TitleContainer>
          <Button
            text="네이버 지도 바로가기"
            backgroundColor={COLORS.FOUR}
            textColor="black"
            onPress={onNaverPress}
          />
          <Button
            text="카카오 지도 바로가기"
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

export default HomeDetail;
