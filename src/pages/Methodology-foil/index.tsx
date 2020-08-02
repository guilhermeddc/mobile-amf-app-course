import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';

import {
  Container,
  Main,
  Logo,
  FotoProfessor,
  ViewRow,
  SubtitleCoordenador,
  SubtitleNumero,
  SubtitleEmail,
  Subtitle,
  Text,
  Footer,
} from './styles';

import Nagivator from '../../components/Navigator';

import theme from '../../styles/theme';

import infoMethodology from '../../utils/methodology';

import * as MailComposer from 'expo-mail-composer';

import logoFOIL from '../../assets/logo-FOIL.png';
import fotoProfessor from '../../assets/professor-foil.jpg';

const Methodology: React.FC = () => {
  const {goBack} = useNavigation();

  function handleComposeWhatsapp() {
    Linking.openURL(`tel:(55) 3289-1141`);
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Coordenação AMF',
      recipients: ['coordfoil@faculdadeam.edu.br'],
      body: 'Olá, Coordenador!',
    });
  }

  return (
    <Container>
      <Nagivator
        onPress={() => goBack()}
        title="Metodologia"
        spotlight="FOIL"
        color={theme.colors.red}
      />
      <Main showsVerticalScrollIndicator={false}>
        <Logo source={logoFOIL} resizeMode="contain" style={{height: 140}} />
        <Subtitle>
          FOIL | Formação Ontopsicológica Interdisciplinar e Liderística
        </Subtitle>
        <Text>{infoMethodology.description}</Text>
        <Subtitle>
          Mas o que é a FOIL? Formação Ontopsicológica Interdisciplinar e
          Liderística.
        </Subtitle>
        <Text>{infoMethodology.answer}</Text>
        <Text>{infoMethodology.lastAnswer}</Text>
        <Footer>
          <FotoProfessor source={fotoProfessor} resizeMode="contain" />
          <ViewRow>
            <SubtitleCoordenador>Coordenação</SubtitleCoordenador>
            <SubtitleNumero onPress={handleComposeWhatsapp}>
              (55) 3289-1141
            </SubtitleNumero>
            <SubtitleEmail onPress={handleComposeMail}>
              coordfoil@faculdadeam.edu.br
            </SubtitleEmail>
          </ViewRow>
        </Footer>
      </Main>
    </Container>
  );
};

export default Methodology;
