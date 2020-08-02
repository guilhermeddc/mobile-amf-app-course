import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  MainCourses,
  Logo,
  SubtitleC,
  Text,
  Footer,
  IconView,
  Icon,
  TitleType,
  SubtitleTypeC,
} from '../styles';

import Nagivator from '../../../components/Navigator';

import theme from '../../../styles/theme';

import infoAdministration from '../../../utils/admin';

import logoAdministration from '../../../assets/admin.png';
import iconAula from '../../../assets/icoaulaadmin.png';
import iconEstrela from '../../../assets/icoestrelaadmin.png';
import iconForm from '../../../assets/icoformadmin.png';
import iconLivro from '../../../assets/icolivroadmin.png';

const Administration: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Nagivator
        onPress={() => goBack()}
        title="Adminis"
        spotlight="tração"
        color={theme.colors.cian}
      />
      <MainCourses showsVerticalScrollIndicator={false}>
        <Logo source={logoAdministration} resizeMode="contain" />
        <Text>{infoAdministration.description}</Text>
        <SubtitleC>Onde você poderá trabalhar?</SubtitleC>
        <Text>{infoAdministration.working}</Text>
        <SubtitleC>{infoAdministration.info}</SubtitleC>
        <Footer>
          <IconView>
            <Icon source={iconAula} />
            <TitleType>Modalidade</TitleType>
            <SubtitleTypeC>{infoAdministration.modality}</SubtitleTypeC>
          </IconView>
          <IconView>
            <Icon source={iconForm} />
            <TitleType>Tipo</TitleType>
            <SubtitleTypeC>{infoAdministration.courseType}</SubtitleTypeC>
          </IconView>
          <IconView>
            <Icon source={iconLivro} />
            <TitleType>Duração</TitleType>
            <SubtitleTypeC>{infoAdministration.Duration}</SubtitleTypeC>
          </IconView>
          <IconView>
            <Icon source={iconEstrela} />
            <TitleType>Nota</TitleType>
            <SubtitleTypeC>{infoAdministration.note}</SubtitleTypeC>
          </IconView>
        </Footer>
      </MainCourses>
    </Container>
  );
};

export default Administration;
