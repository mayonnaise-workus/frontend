import React from 'react';
import images from '../../../../assets/images';
import {Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {DeleteFavoriteWorkSpaces} from '../../../redux/service/DeleteFavoriteWorkSpaces';

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
}
function WorkSpaceList(props: Ipros) {
  const {list} = props;
  const dispatch = useDispatch();

  async function handleData(id: number) {
    DeleteFavoriteWorkSpaces(id)(dispatch);
  }

  return (
    <>
      {list && (
        <Wrapper>
          <ImageBlock
            source={{
              uri: `${list[1].profile_img}`,
            }}
          />
          <Information>
            <Name numberOfLines={1} ellipsizeMode="tail">
              {list[1].name}
            </Name>
            <Address numberOfLines={1} ellipsizeMode="tail">
              {list[1].address}
            </Address>
          </Information>
          <LogoBlock>
            <Pressable onPress={() => handleData(list[1].id)}>
              <Logo source={images.BOOKMARK_GRAY} />
            </Pressable>
          </LogoBlock>
        </Wrapper>
      )}
    </>
  );
}
export default WorkSpaceList;
