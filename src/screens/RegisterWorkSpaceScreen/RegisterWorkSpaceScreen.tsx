import React, {useEffect, useState} from 'react';
import {Dimensions, Alert} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Description from '../../components/login/Description/Description';
import COLORS from '../../../packages/colors';
import {workspace} from '../../data';
import RegisterButton from '../../components/login/RegisterButton/RegisterButton';
import {EmptyView, ScrollView} from './style';
import {connect, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../introScreenPropsType';
import Wrapper from '../../components/common/Wrapper';
import OnboardingHeader from '../../components/common/OnboardingHeader';
import Button from '../../components/login/NextButton/NextButton';
import {setWorkspace_purpose_ids} from '../../redux/slice/PostPreferenceSlice';
import {PostPreferenceApi} from '../../redux/service/PostPreferenceApi';

interface IProps {
  navigation: IntroStackNavigationProps<'RegisterWorkspace'>;
  route: RouteProp<IntroStackParamList, 'RegisterWorkspace'>;
}

function RegisterWorkSpaceScreen({navigation}: IProps) {
  const [checkList, setCheckList] = useState<number[]>([]);
  const check = checkList.length >= 1 && checkList.length <= 3;
  const dispatch = useDispatch();

  const postpreference = useSelector(
    (state: RootState) => state.postpreference,
  );

  useEffect(() => {
    const workspaceCheck = async () => {
      if (check) {
        dispatch(setWorkspace_purpose_ids(checkList));
      } else if (checkList.length > 3) {
        Alert.alert('최대 3개까지 선택할 수 있습니다');
      }
    };
    workspaceCheck();
  }, [check, checkList, dispatch]);

  const handleSubmit = async () => {
    PostPreferenceApi(postpreference)(dispatch);
  };

  useEffect(() => {
    postpreference.data === 200 && navigation.navigate('MainNavigator');
  }, [navigation, postpreference.data]);

  return (
    <Wrapper>
      <OnboardingHeader
        text="어떤 워크 스페이스를 선호하나요?"
        goback={navigation.goBack}
      />
      <Description description="최대 3개까지 선택할 수 있습니다." />
      <ScrollView
        contentContainerStyle={{alignItems: 'center', gap: 12}}
        showsVerticalScrollIndicator>
        {workspace.slice(1).map(item => {
          return (
            <RegisterButton
              key={item.id}
              id={item.id}
              title={item.title}
              width={Dimensions.get('window').width - 40}
              height={54}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          );
        })}
        <EmptyView />
        <Button
          text="시작하기"
          backgroundColor={check ? COLORS.TWO : COLORS.GRAY_7}
          textColor={check ? COLORS.GRAY_2 : COLORS.GRAY_8}
          onPress={handleSubmit}
        />
      </ScrollView>
    </Wrapper>
  );
}

const mapStateToProps = (state: {
  postpreference: {workspace_purpose_ids: array};
}) => ({
  workspace_purpose_ids: state.postpreference.workspace_purpose_ids,
});

const mapDispatchToProps = {
  setWorkspace_purpose_ids,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterWorkSpaceScreen);
