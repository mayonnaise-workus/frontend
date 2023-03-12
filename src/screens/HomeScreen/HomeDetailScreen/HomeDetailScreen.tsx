import React, {useEffect, useState} from 'react';
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
  URLTitleContainer,
  GrayLogo,
  URLTitle,
  DetailTagContent,
  ScrollViewContainer,
  MapContainer,
  ImageContainer,
  BookMark,
  LogoImage,
  Block,
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {Pressable} from 'react-native';
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
          <Block>
            <FirstLineContainer>
              <Title>{name}</Title>
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
          </Block>
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
        </ContentContainer>
        <URLContainer>
          <URLTitleContainer>
            <GrayLogo source={images.GRAY_LOGO} />
            <URLTitle>스페이스 바로가기</URLTitle>
          </URLTitleContainer>
          <Button
            text="네이버 지도 바로가기"
            backgroundColor={COLORS.FOUR}
            textColor="black"
            onPress={() => {}}
          />
          <Button
            text="카카오 지도 바로가기"
            backgroundColor={COLORS.FOUR}
            textColor="black"
            onPress={() => {}}
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
