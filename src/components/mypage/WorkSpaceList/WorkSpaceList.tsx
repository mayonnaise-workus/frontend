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
  list: object;
}
function WorkSpaceList(props: Ipros) {
  const {list} = props;

  console.log(list);

  return (
    <Wrapper>
      <ImageBlock
        source={{
          uri: 'https://pup-review-phinf.pstatic.net/MjAyMjEyMTVfOTgg/MDAxNjcxMDg1NjM0Njk0.acU9aD0p4APxLKC2X6FCRI9oolFdEFfiPvij1VSEBTkg.lFflC0Q5ISTT6lFyRat8DES3W_56IplFZ8I4_5E0jBsg.JPEG/5439730B-765A-456F-99A6-07D2F4A640F0.jpeg',
        }}
      />
      <Information>
        <Name>{list.name}</Name>
        <Address>{list.address.slice(0, 7)}</Address>
      </Information>
      <LogoBlock>
        <Pressable>
          <Logo source={images.BOOKMARK_GRAY} />
        </Pressable>
      </LogoBlock>
    </Wrapper>
  );
}
export default WorkSpaceList;
