import React from 'react';
import images from '../../../../assets/images';
import {Pressable} from 'react-native';

import {
  Address,
  ImageBlock,
  Information,
  Logo,
  LogoBlock,
  Name,
  Wrapper,
} from './style';

interface Ipros {
  list: {[key: string]: any};
  handleData: () => void;
}
function WorkSpaceList(props: Ipros) {
  const {list, handleData} = props;

  return (
    <>
      {list && (
        <Wrapper>
          <ImageBlock
            source={{
              uri: `${list.profile_img}`,
            }}
          />
          <Information>
            <Name numberOfLines={1} ellipsizeMode="tail">
              {list.name}
            </Name>
            <Address numberOfLines={1} ellipsizeMode="tail">
              {list.address}
            </Address>
          </Information>
          <LogoBlock>
            <Pressable onPress={() => handleData(list.id)}>
              <Logo source={images.BOOKMARK_YELLOW_ICON} />
            </Pressable>
          </LogoBlock>
        </Wrapper>
      )}
    </>
  );
}
export default WorkSpaceList;
