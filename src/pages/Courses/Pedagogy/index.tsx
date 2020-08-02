import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  MainCourses,
  Logo,
  SubtitleP,
  Text,
  Footer,
  IconView,
  Icon,
  TitleType,
  SubtitleTypeP,
} from '../styles';

import Nagivator from '../../../components/Navigator';

import theme from '../../../styles/theme';

import infoPedagogy from '../../../utils/pedagogy';

import logoPedagogy from '../../../assets/pedagogia.png';
import iconAula from '../../../assets/icoaulapedagogia.png';
import iconEstrela from '../../../assets/icoestrelapedagogia.png';
import iconForm from '../../../assets/icoformpedagogia.png';
import iconLivro from '../../../assets/icolivropedagogia.png';

const Pedagogy: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Nagivator
        onPress={() => goBack()}
        title="Peda"
        spotlight="gogia"
        color={theme.colors.purple}
      />
      <MainCourses showsVerticalScrollIndicator={false}>
        <Logo source={logoPedagogy} resizeMode="contain" />
        <Text>{infoPedagogy.description}</Text>
        <SubtitleP>Onde você poderá trabalhar?</SubtitleP>
        <Text>{infoPedagogy.working}</Text>
        <SubtitleP>{infoPedagogy.info}</SubtitleP>
        <Footer>
          <IconView>
            <Icon source={iconAula} />
            <TitleType>Modalidade</TitleType>
            <SubtitleTypeP>{infoPedagogy.modality}</SubtitleTypeP>
          </IconView>
          <IconView>
            <Icon source={iconForm} />
            <TitleType>Tipo</TitleType>
            <SubtitleTypeP>{infoPedagogy.courseType}</SubtitleTypeP>
          </IconView>
          <IconView>
            <Icon source={iconLivro} />
            <TitleType>Duração</TitleType>
            <SubtitleTypeP>{infoPedagogy.Duration}</SubtitleTypeP>
          </IconView>
          <IconView>
            <Icon source={iconEstrela} />
            <TitleType>Nota</TitleType>
            <SubtitleTypeP>{infoPedagogy.note}</SubtitleTypeP>
          </IconView>
        </Footer>
      </MainCourses>
    </Container>
  );
};

export default Pedagogy;
