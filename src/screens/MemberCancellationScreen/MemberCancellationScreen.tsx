import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import COLORS from '../../../packages/colors';
import HeaderBackButton from '../../components/login/HeaderBackbutton/HeaderBackButton';
import Description from '../../components/login/Description/Description';
import {memberCancellation} from '../../data';
import {
  Container,
  DescriptionContainer,
  EmptyView,
  RadioGroupContainer,
  TextInput,
  TextInputContainer,
  TitleContainer,
  TitleText,
} from './style';
import Button from '../../components/login/NextButton/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteMember} from '../../redux/service/DeleteMember';

import {
  MyScreenStackNavigationProps,
  MyScreenStackParamList,
} from '../myScreenPropsType';
import RadioGroup from './RadioGroup';
import {RootState} from '../../redux/store/store';

interface IProps {
  navigation: MyScreenStackNavigationProps<'MemberCancellation'>;
  route: RouteProp<MyScreenStackParamList, 'MemberCancellation'>;
}

function MemberCancellationScreen({navigation}: IProps) {
  const dispatch = useDispatch();
  const {error} = useSelector((state: RootState) => state.deletemember);
  const [selectedOption, setSelectedOption] = useState<string>(
    memberCancellation[0].text,
  );
  const [message, setMessage] = useState<string>('');

  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  const handleData = async () => {
    selectedOption === '기타' && message
      ? await DeleteMember(message)(dispatch)
      : await DeleteMember(selectedOption)(dispatch);
    !error && navigation.navigate('MemberCancellationComplete');
  };

  return (
    <Container>
      <HeaderBackButton onPress={() => navigation.pop()} />
      <TitleContainer>
        <TitleText>회원 탈퇴 이유</TitleText>
      </TitleContainer>
      <DescriptionContainer>
        <Description
          description={`Work Us와 함께 해주셔서 감사합니다!
그동안 앱을 이용해주셔서 감사합니다. 
앱 탈퇴 사유를 적어주시면, 
반영하여 더 좋은 서비스를 만들도록 노력하겠습니다. 
저희 앱이 많은 도움이 되셨기를 바라겠습니다.`}
        />
      </DescriptionContainer>
      <RadioGroupContainer>
        <RadioGroup
          options={memberCancellation}
          selectedValue={selectedOption}
          onChange={handleOptionChange}
        />
      </RadioGroupContainer>

      {selectedOption === '기타' && (
        <TextInputContainer>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="탈퇴하시는 이유를 적어주세요."
            placeholderTextColor={COLORS.GRAY_5}
          />
        </TextInputContainer>
      )}

      <Button
        text="다음"
        backgroundColor={selectedOption ? COLORS.TWO : COLORS.GRAY_7}
        textColor={selectedOption ? COLORS.GRAY_1 : COLORS.GRAY_8}
        onPress={handleData}
      />

      <EmptyView />
    </Container>
  );
}

export default MemberCancellationScreen;
