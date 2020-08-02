import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  MainCourses,
  Logo,
  SubtitleY,
  Text,
  Footer,
  IconView,
  Icon,
  TitleType,
  SubtitleTypeY,
} from '../styles';

import Nagivator from '../../../components/Navigator';

import infoOnto from '../../../utils/onto';

import theme from '../../../styles/theme';

import logoOnto from '../../../assets/onto.png';
import iconAula from '../../../assets/icoaulaonto.png';
import iconEstrela from '../../../assets/icoestrelaonto.png';
import iconForm from '../../../assets/icoformonto.png';
import iconLivro from '../../../assets/icolivroonto.png';

const Onto: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Nagivator
        onPress={() => goBack()}
        title="Onto"
        spotlight="psicologia"
        color={theme.colors.yellow}
      />
      <MainCourses showsVerticalScrollIndicator={false}>
        <Logo source={logoOnto} resizeMode="contain" />
        <Text>{infoOnto.description}</Text>
        <SubtitleY>Onde você poderá trabalhar?</SubtitleY>
        <Text>{infoOnto.working}</Text>
        <SubtitleY>{infoOnto.info}</SubtitleY>
        <Footer>
          <IconView>
            <Icon source={iconAula} />
            <TitleType>Modalidade</TitleType>
            <SubtitleTypeY>{infoOnto.modality}</SubtitleTypeY>
          </IconView>
          <IconView>
            <Icon source={iconForm} />
            <TitleType>Tipo</TitleType>
            <SubtitleTypeY>{infoOnto.courseType}</SubtitleTypeY>
          </IconView>
          <IconView>
            <Icon source={iconLivro} />
            <TitleType>Duração</TitleType>
            <SubtitleTypeY>{infoOnto.Duration}</SubtitleTypeY>
          </IconView>
          <IconView>
            <Icon source={iconEstrela} />
            <TitleType>Nota</TitleType>
            <SubtitleTypeY>{infoOnto.note}</SubtitleTypeY>
          </IconView>
        </Footer>
      </MainCourses>
    </Container>
  );
};

export default Onto;
