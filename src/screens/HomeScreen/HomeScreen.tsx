import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Container,
  SliderButtonContainer,
  SliderButton,
  SliderButtonText,
  MapContainer,
  CategoryRow,
  Category,
  CategoryText,
  CategoryDetailRow,
} from './style';
import MapView, {Marker} from 'react-native-maps';
import BottomSheet, {
  BottomSheetModalProvider,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import {region, purpose, workspace, capacity} from '../../data';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import MainHeader from '../../components/common/MainHeader';
import HomeScrollDetail from './HomeScrollDetail';
import filterFunc from './filter/filterFunc';
import onClick from './filter/onClick';
import images from '../../../assets/images';
import {PreferenceApi} from '../../redux/service/PreferenceApi';
import {useDispatch, useSelector} from 'react-redux';
import {WorkSpaceListByRegionApi} from '../../redux/service/WorkspaceListByRegionApi';
import {RootState} from '../../redux/store/store';

type RegionType = {
  id: number;
  value: string;
  title: string;
  enTitle: string;
  latitude: number;
  longitude: number;
};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    PreferenceApi()(dispatch);
  }, [dispatch]);
  const {data: preferenceObj} = useSelector(
    (state: RootState) => state.preference,
  );
  const [regionList, setRegionList] = useState<number[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<RegionType[]>([]);
  const [currentRegion, setCurrentRegion] = useState([0, 0]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (preferenceObj) {
      setRegionList(() => {
        return preferenceObj.preference_workspace_regions;
      });
    }
  }, [preferenceObj]);

  useEffect(() => {
    if (regionList.length) {
      setSelectedRegion(() => {
        const newSelectedRegion: RegionType[] = [];
        regionList.forEach(regionNum =>
          newSelectedRegion.push(region[regionNum - 1]),
        );
        return newSelectedRegion;
      });
    }
  }, [regionList]);

  useEffect(() => {
    if (isInitialRender && selectedRegion.length) {
      setIsInitialRender(false);
      setCurrentRegion(() => {
        return [selectedRegion[0].latitude, selectedRegion[0].longitude];
      });
    }
  }, [isInitialRender, selectedRegion]);

  useEffect(() => {
    regionList.length && WorkSpaceListByRegionApi(regionList)(dispatch);
  }, [dispatch, regionList]);
  const {data: workspaceList} = useSelector(
    (state: RootState) => state.workspacebyregionlist,
  );

  const handleCurrentChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentWidth = Dimensions.get('window').width - 72;
    const nextCurrent: number = Math.round(
      e.nativeEvent.contentOffset.x / contentWidth,
    );
    if (nextCurrent < 0) {
      return;
    }
    setCurrentRegion(() => {
      return [
        selectedRegion[nextCurrent].latitude,
        selectedRegion[nextCurrent].longitude,
      ];
    });
  };

  const [filterObject, setFilterObject] = useState({
    obj: [0],
    num: [0],
    place: [0],
  });

  const [objButtonIsClicked, setObjButtonIsClicked] = useState(false);
  const [numButtonIsClicked, setNumButtonIsClicked] = useState(false);
  const [placeButtonIsClicked, setPlaceButtonIsClicked] = useState(false);

  const filteredData = filterFunc(filterObject);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['37.5%', '100%'], []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
      <BottomSheetModalProvider>
        <Container>
          <MainHeader />
          <SliderButtonContainer>
            <Animated.ScrollView
              horizontal
              decelerationRate={0}
              snapToInterval={Dimensions.get('window').width - 64}
              snapToAlignment={'start'}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={handleCurrentChange}
              contentContainerStyle={{
                paddingLeft: 28,
                paddingRight: 28,
                alignItems: 'center',
              }}>
              {selectedRegion.map((current, index) => (
                <SliderButton
                  key={index}
                  style={{
                    marginLeft: index === 0 ? 8 : 4,
                    marginRight: index === selectedRegion.length - 1 ? 8 : 4,
                  }}>
                  <SliderButtonText>{current.title}</SliderButtonText>
                </SliderButton>
              ))}
            </Animated.ScrollView>
          </SliderButtonContainer>
          <MapContainer>
            <MapView
              style={{
                width: '100%',
                height: '100%',
              }}
              region={{
                latitude: currentRegion[0],
                longitude: currentRegion[1],
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}>
              {workspaceList &&
                workspaceList.map((item, index) => (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: +item.latitude,
                      longitude: +item.longitude,
                    }}
                    title={item.name}
                    image={
                      item.workspace_obj === 1
                        ? images.PERSONAL_STUDY
                        : item.workspace_obj === 2
                        ? images.LAPTOP_WORK
                        : item.workspace_obj === 3
                        ? images.CONTACT_FREE_MEETING
                        : images.CONTACT_MEETING
                    }
                  />
                ))}
            </MapView>
            <CategoryRow>
              <Category
                onPress={() => {
                  if (objButtonIsClicked) {
                    setObjButtonIsClicked(false);
                  } else {
                    setObjButtonIsClicked(true);
                    setNumButtonIsClicked(false);
                    setPlaceButtonIsClicked(false);
                  }
                }}>
                <CategoryText>업무 목적 ∨</CategoryText>
              </Category>
              <Category
                onPress={() => {
                  if (placeButtonIsClicked) {
                    setPlaceButtonIsClicked(false);
                  } else {
                    setPlaceButtonIsClicked(true);
                    setObjButtonIsClicked(false);
                    setNumButtonIsClicked(false);
                  }
                }}>
                <CategoryText>공간 유형 ∨</CategoryText>
              </Category>
              <Category
                onPress={() => {
                  if (numButtonIsClicked) {
                    setNumButtonIsClicked(false);
                  } else {
                    setNumButtonIsClicked(true);
                    setObjButtonIsClicked(false);
                    setPlaceButtonIsClicked(false);
                  }
                }}>
                <CategoryText>인원 ∨</CategoryText>
              </Category>
            </CategoryRow>
            {objButtonIsClicked && (
              <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  position: 'absolute',
                  top: 50,
                  left: 20,
                }}
                contentContainerStyle={{
                  minWidth: 500 * filterObject.obj.length,
                  flexDirection: 'row',
                }}>
                {purpose.map(item => (
                  <Category
                    key={item.id}
                    onPress={() => {
                      onClick('obj', item.title, filterObject, setFilterObject);
                    }}
                    style={() => [
                      {
                        backgroundColor: filterObject.obj.includes(item.id)
                          ? 'black'
                          : 'white',
                        marginRight: 5,
                      },
                    ]}>
                    <CategoryText
                      style={{
                        color: filterObject.obj.includes(item.id)
                          ? 'white'
                          : 'black',
                      }}>
                      {item.icon ? `${item.icon}  ` : ''}
                      {item.title}
                    </CategoryText>
                  </Category>
                ))}
              </Animated.ScrollView>
            )}
            {numButtonIsClicked && (
              <CategoryDetailRow>
                {capacity.map(item => (
                  <Category
                    key={item.id}
                    onPress={() => {
                      onClick('num', item.title, filterObject, setFilterObject);
                    }}
                    style={() => [
                      {
                        backgroundColor: filterObject.num.includes(item.id)
                          ? 'black'
                          : 'white',
                        marginRight: 5,
                      },
                    ]}>
                    <CategoryText
                      style={{
                        color: filterObject.num.includes(item.id)
                          ? 'white'
                          : 'black',
                      }}>
                      {item.title}
                    </CategoryText>
                  </Category>
                ))}
              </CategoryDetailRow>
            )}
            {placeButtonIsClicked && (
              <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  position: 'absolute',
                  top: 50,
                  left: 20,
                }}
                contentContainerStyle={{
                  minWidth: 550 * filterObject.place.length,
                  flexDirection: 'row',
                }}>
                {workspace.map(item => (
                  <Category
                    key={item.id}
                    onPress={() => {
                      onClick(
                        'place',
                        item.title,
                        filterObject,
                        setFilterObject,
                      );
                    }}
                    style={() => [
                      {
                        backgroundColor: filterObject.place.includes(item.id)
                          ? 'black'
                          : 'white',
                        marginRight: 5,
                      },
                    ]}>
                    <CategoryText
                      style={{
                        color: filterObject.place.includes(item.id)
                          ? 'white'
                          : 'black',
                      }}>
                      {item.title}
                    </CategoryText>
                  </Category>
                ))}
              </Animated.ScrollView>
            )}
          </MapContainer>
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            animationConfigs={animationConfigs}
            animateOnMount={true}>
            <ScrollView
              contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                minHeight: 1800,
              }}>
              <HomeScrollDetail />
              <HomeScrollDetail />
              <HomeScrollDetail />
              <HomeScrollDetail />
              <HomeScrollDetail />
              <HomeScrollDetail />
            </ScrollView>
          </BottomSheet>
        </Container>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Home;
