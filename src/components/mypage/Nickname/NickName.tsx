import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import images from '../../../../assets/images';
import {RootState} from '../../../redux/store/store';
import {MemberApi} from '../../../redux/service/MemberApi';
import {
  EditProfile,
  EditProfilePressable,
  Profile,
  Text,
  Wrapper,
} from './style';

interface IProps {
  onPress: () => void;
}

function NickName({onPress}: IProps) {
  const {member} = useSelector((state: RootState) => state.member);
  const [nickname, setNickname] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await MemberApi()(dispatch);
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (member) {
      setNickname(member.name);
    }
  }, [member]);

  return (
    <Wrapper>
      <Profile source={images.PROFILE_WHITE} />
      <EditProfilePressable onPress={onPress}>
        <EditProfile source={images.PENCIL_ICON} />
      </EditProfilePressable>
      {member ? <Text>{nickname}</Text> : <Text>WorkUS</Text>}
    </Wrapper>
  );
}

export default NickName;
