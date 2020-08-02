import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  MainCourses,
  Logo,
  Subtitle,
  Text,
  Footer,
  IconView,
  Icon,
  TitleType,
  SubtitleType,
} from '../styles';

import Nagivator from '../../../components/Navigator';

import theme from '../../../styles/theme';

import infoSi from '../../../utils/si';

import logoSi from '../../../assets/si.png';
import iconAula from '../../../assets/icoaula.png';
import iconEstrela from '../../../assets/icoestrela.png';
import iconForm from '../../../assets/icoform.png';
import iconLivro from '../../../assets/icolivro.png';

const Si: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Nagivator
        onPress={() => goBack()}
        title="Sistemas de "
        spotlight="informação"
        color={theme.colors.primary}
      />
      <MainCourses showsVerticalScrollIndicator={false}>
        <Logo source={logoSi} resizeMode="contain" />
        <Text>{infoSi.description}</Text>
        <Subtitle>Onde você poderá trabalhar?</Subtitle>
        <Text>{infoSi.working}</Text>
        <Subtitle>{infoSi.info}</Subtitle>
        <Footer>
          <IconView>
            <Icon source={iconAula} />
            <TitleType>Modalidade</TitleType>
            <SubtitleType>{infoSi.modality}</SubtitleType>
          </IconView>
          <IconView>
            <Icon source={iconForm} />
            <TitleType>Tipo</TitleType>
            <SubtitleType>{infoSi.courseType}</SubtitleType>
          </IconView>
          <IconView>
            <Icon source={iconLivro} />
            <TitleType>Duração</TitleType>
            <SubtitleType>{infoSi.Duration}</SubtitleType>
          </IconView>
          <IconView>
            <Icon source={iconEstrela} />
            <TitleType>Nota</TitleType>
            <SubtitleType>{infoSi.note}</SubtitleType>
          </IconView>
        </Footer>
      </MainCourses>
    </Container>
  );
};

export default Si;
