import React from 'react';
import {ScrollView} from 'react-native';
import images from '../../../../assets/images';
import {
  Container,
  Content,
  ContentContainer,
  Image,
  SubTitle,
  SubTitleContainer,
  Title,
  TitleContainer,
} from './style';
import {RouteProp} from '@react-navigation/native';
import {
  MagazineScreenStackNavigationProps,
  MagazineScreenStackParamList,
} from '../../magazineScreenPropsType';

interface IProps {
  navigation: MagazineScreenStackNavigationProps<'MagazineDetail'>;
  route: RouteProp<MagazineScreenStackParamList, 'MagazineDetail'>;
}

const MagazineDetailScreen = ({}: IProps) => {
  return (
    <Container>
      <ScrollView>
        <TitleContainer>
          <Title>어떤 공간을 좋아하세요?</Title>
        </TitleContainer>
        <ContentContainer>
          <Content>
            사람들은 각자마다 선호하는 공간이 있다. 공간이라는 건 사람의 다양한
            부분을 반영한 총체적인 취향을 나타내는 거라서, 보통은 좋아하는
            공간으로 그 사람의 성향이나 성격을 유추할 수 있다.
          </Content>
          <Content>
            선호라는 건 시간이 지나면 바뀌는 것이라고들 하지만, 실제로는 조금씩
            모여 다른 형상을 하는 것에 가깝다고 생각한다. 나 역시도 여기서 조금,
            저기서 조금씩 모은 취향들이 모여서 지금의 나의 선호가 되었으니까.
            그렇게 모인 선호들은 나를 나타내고, 그건 어딜가나 드러난다. 마치
            성격처럼.
          </Content>
          <Content>
            아마 이 글을 읽고 있는 당신도 자연스럽게 떠올렸을 것이다. ‘나는 이
            장소가 좋다던가, 나는 이런 곳을 좋아했지’ 하는 생각이 머리 속을
            스쳐지나갔을 것이다. 나 역시도 이 글을 쓰면서 몇 번이나 내가
            좋아하는 장소들을 생각했다. 내가 머무르면서 좋은 결과물을 낼 수
            있도록 돌봐준 따듯한 공간들을 떠올리니, 어딘가 마음 한 켠이
            말랑거린다.
          </Content>
          <Content>
            나는 가끔 사람들에게 선호를 묻곤한다. A랑 B중에서 어떤 것이 더 좋은
            지, 왜 그게 더 좋은 지 같은 질문들을 밥 먹듯한다. 그리고 그 사람들의
            선호를 통해 더 넓은 세상을 이해한다. 그게 내 앞의 사람일 수도 있고,
            취향이나 선호에 대한 이해일 수도 있다. 혹은 그 질문을 통한 나 자신에
            대한 탐색일지도 모른다.
          </Content>
          <Content>
            이 글을 읽으면서 공간에 대한 이해와 의견을 공유해보기를 바란다.
          </Content>
        </ContentContainer>
        <SubTitleContainer>
          <SubTitle>넓은 책상과 1인용 좌석</SubTitle>
        </SubTitleContainer>
        <ContentContainer>
          <Image source={images.MAGAZINE_1} />
          <Image source={images.MAGAZINE_2} />
          <Content>
            탁 트인 분위기에서 공부할 수 있는 넓은 책상과 1인용 좌석 중에서
            고르라고 하면 나는 1인용 좌석을 더 선호한다. 나는 보통 작업을 하러
            갈 때 짐을 많이 챙기는 편이다. 한 가지라도 부족하면 일을 하는 내내
            계속 신경이 쓰이는 편이라 그렇다. 당연히 이것저것 챙기다보면 책상
            위에 자연스럽게 늘어놓기 마련이다. 다른 사람들과 함께 쓰는 넓은
            책상은 경계가 모호할 뿐 아니라, 많은 물건을 꺼내놓는 것 자체가
            불가능하기 때문에 나는 1인용 좌석을 자주 이용한다.
          </Content>
        </ContentContainer>
        <SubTitleContainer>
          <SubTitle>창의적인 분위기와 편안한 분위기</SubTitle>
        </SubTitleContainer>
        <ContentContainer>
          <Image source={images.MAGAZINE_3} />
          <Image source={images.MAGAZINE_4} />
          <Content>
            작업을 할 때 유독 긴장하는 사람들이 있다. 긴장하지말고 편하게 해야
            좋은 성과가 나온다는 걸 알면서도 긴장하게 되는 건 어쩔 수 없는 것
            같다. 나도 그런 사람들 중 한 명이라, 나는 의도적으로 긴장감을 해소할
            수 있는 편안한 분위기의 공간을 선호한다.
          </Content>
          <Content>
            느긋한 음악과 따뜻한 조명, 편안한 의자와 함께 있으면 무서울 것이
            없다. 처음에는 긴장감으로 작업을 시작하지만, 환경의 영향으로
            자연스럽게 원래의 페이스를 되찾을 수 있다.
          </Content>
        </ContentContainer>
        <SubTitleContainer>
          <SubTitle>익숙한 곳과 새로운 곳</SubTitle>
        </SubTitleContainer>
        <ContentContainer>
          <Image source={images.MAGAZINE_5} />
          <Image source={images.MAGAZINE_6} />
          <Content>
            익숙한 곳과 새로운 곳 중에서 고르라고 한다면 나는 익숙한 곳을 고를
            것이다. 내가 좋아하는 자리, 많이 쌓아둔 쿠폰, 내 취향에 딱 맞는
            것들이 넘치는 익숙한 환경에서 작업을 해야지만 편안함을 느끼는
            사람이라 그렇다. 새로운 곳에 가면 작업하는 시간 외에도 적응하는 것에
            신경을 많이 기울여야 하기 때문에 나는 익숙한 곳을 더 선호한다.
          </Content>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
};

export default MagazineDetailScreen;
