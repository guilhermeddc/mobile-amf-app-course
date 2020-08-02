import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  MainCourses,
  Logo,
  SubtitleR,
  Text,
  Footer,
  IconView,
  Icon,
  TitleType,
  SubtitleTypeR,
} from '../styles';

import Nagivator from '../../../components/Navigator';

import theme from '../../../styles/theme';

import infoLaw from '../../../utils/law';

import logoLaw from '../../../assets/direito.png';
import iconAula from '../../../assets/icoauladireito.png';
import iconEstrela from '../../../assets/icoestreladireito.png';
import iconForm from '../../../assets/icoformdireito.png';
import iconLivro from '../../../assets/icolivrodireito.png';

const Law: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Nagivator
        onPress={() => goBack()}
        title="Dire"
        spotlight="ito"
        color={theme.colors.red}
      />
      <MainCourses showsVerticalScrollIndicator={false}>
        <Logo source={logoLaw} resizeMode="contain" />
        <Text>{infoLaw.description}</Text>
        <SubtitleR>Onde você poderá trabalhar?</SubtitleR>
        <Text>{infoLaw.working}</Text>
        <SubtitleR>{infoLaw.info}</SubtitleR>
        <Footer>
          <IconView>
            <Icon source={iconAula} />
            <TitleType>Modalidade</TitleType>
            <SubtitleTypeR>{infoLaw.modality}</SubtitleTypeR>
          </IconView>
          <IconView>
            <Icon source={iconForm} />
            <TitleType>Tipo</TitleType>
            <SubtitleTypeR>{infoLaw.courseType}</SubtitleTypeR>
          </IconView>
          <IconView>
            <Icon source={iconLivro} />
            <TitleType>Duração</TitleType>
            <SubtitleTypeR>{infoLaw.Duration}</SubtitleTypeR>
          </IconView>
          <IconView>
            <Icon source={iconEstrela} />
            <TitleType>Nota</TitleType>
            <SubtitleTypeR>{infoLaw.note}</SubtitleTypeR>
          </IconView>
        </Footer>
      </MainCourses>
    </Container>
  );
};

export default Law;
