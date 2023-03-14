import React from 'react';
import images from '../../../../assets/images';
import {Pressable} from 'react-native';

import {
  Address,
  ImageBlock,
  Information,
  Logo,
  Name,
  Wrapper,
  FirstLineContainer,
  DetailTagRow,
  DetailTag,
  DetailTagContent,
} from './style';
import {MyScreenStackNavigationProps} from '../../../screens/myScreenPropsType';
import {capacity, purpose, workspace} from '../../../data';

interface Iprops {
  list: {
    address: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    profile_img: string;
    workspace_capacity: number;
    workspace_obj: number;
    workspace_region: number;
    workspace_type: number;
  };
  handleData: () => void;
  navigation: MyScreenStackNavigationProps<'Scrap'>;
}
function WorkSpaceList(props: Iprops) {
  const {list, handleData, navigation} = props;
  const selectedObj = `${purpose[list.workspace_obj].icon} ${
    purpose[list.workspace_obj].title
  }`;
  const selectedWorkspace = `${workspace[list.workspace_type].title}`;
  const selectedCapacity = `${capacity[list.workspace_capacity].title}`;

  return (
    <>
      {list && (
        <Wrapper
          onPress={() => {
            navigation.navigate('ScrapDetail', {
              id: list.id,
              name: list.name,
              image: list.profile_img,
              address: list.address,
              latitude: list.latitude,
              longitude: list.longitude,
              selectedObj,
              selectedWorkspace,
              selectedCapacity,
            });
          }}>
          <ImageBlock
            source={{
              uri: `${list.profile_img}`,
            }}
          />
          <Information>
            <FirstLineContainer>
              <Name numberOfLines={1} ellipsizeMode="tail">
                {list.name}
              </Name>
              <Pressable onPress={handleData}>
                <Logo source={images.BOOKMARK_YELLOW_ICON} />
              </Pressable>
            </FirstLineContainer>
            <Address numberOfLines={1} ellipsizeMode="tail">
              {list.address}
            </Address>
            <DetailTagRow>
              <DetailTag>
                <DetailTagContent>{selectedWorkspace}</DetailTagContent>
              </DetailTag>
              <DetailTag>
                <DetailTagContent>{selectedObj}</DetailTagContent>
              </DetailTag>
            </DetailTagRow>
          </Information>
        </Wrapper>
      )}
    </>
  );
}
export default WorkSpaceList;
