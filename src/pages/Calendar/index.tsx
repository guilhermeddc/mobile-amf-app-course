import React, {useCallback} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather as Icon} from '@expo/vector-icons';

import {
  Container,
  CalendarView,
  CalendarCard,
  CalendarCardContent,
  Image,
  Title,
  Date,
} from './styles';

import theme from '../../styles/theme';
import Navigator from '../../components/Navigator';

import image01 from '../../assets/events/1.png';
import image02 from '../../assets/events/2.png';
import image03 from '../../assets/events/3.png';
import image04 from '../../assets/events/4.png';
import image05 from '../../assets/events/5.png';
import image06 from '../../assets/events/6.png';

const Calendar: React.FC = () => {
  const {goBack} = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleNavigateTolink = useCallback((url) => {
    Linking.openURL(url);
  }, []);

  return (
    <Container>
      <Navigator
        onPress={handleNavigateBack}
        title="Calendario de"
        spotlight=" eventos"
      />
      <CalendarView>
        <CalendarCard
          onPress={() =>
            handleNavigateTolink(
              'https://faculdadeam.edu.br/noticias/detalhes/382/projeto-oikos-recanto-maestro-iniciara-coleta-oleo-usado-cozinha-para-descarte-consciente',
            )
          }>
          <Image source={image01} />
          <CalendarCardContent>
            <Title>
              Projeto OIKOS Recanto Maestro iniciará coleta de óleo usado de
              cozinha para descarte consciente
            </Title>

            <Date>
              <Icon name="calendar" color={theme.colors.cian} size={20} />
              {'  '}sexta-feira, 31 de julho de 2020
            </Date>
          </CalendarCardContent>
        </CalendarCard>

        <CalendarCard
          onPress={() =>
            handleNavigateTolink(
              'https://faculdadeam.edu.br/noticias/detalhes/381/amf--abre-edital-para-selecao-publica-docentes-para-o-curso-sistemas-informacao-',
            )
          }>
          <Image source={image02} />
          <CalendarCardContent>
            <Title>
              AMF abre edital para Seleção Pública de Docentes para o curso de
              Sistemas de Informação
            </Title>

            <Date>
              <Icon name="calendar" color={theme.colors.cian} size={20} />
              {'  '}terça-feira, 28 de julho de 2020
            </Date>
          </CalendarCardContent>
        </CalendarCard>

        <CalendarCard
          onPress={() =>
            handleNavigateTolink(
              'https://faculdadeam.edu.br/noticias/detalhes/380/recanto-maestro-e-noticia-no-jornal--diario--santa-maria-rs',
            )
          }>
          <Image source={image03} />
          <CalendarCardContent>
            <Title>
              Recanto Maestro é notícia no Jornal “Diário” de Santa Maria-RS
            </Title>

            <Date>
              <Icon name="calendar" color={theme.colors.cian} size={20} />
              {'  '}segunda-feira, 27 de julho de 2020
            </Date>
          </CalendarCardContent>
        </CalendarCard>

        <CalendarCard
          onPress={() =>
            handleNavigateTolink(
              'https://faculdadeam.edu.br/noticias/detalhes/379/amf-ira-oferecer-o-curso-contabilidade-ja-no-proximo-vestibular',
            )
          }>
          <Image source={image04} />
          <CalendarCardContent>
            <Title>
              AMF irá oferecer o curso de Contabilidade já no próximo Vestibular
            </Title>

            <Date>
              <Icon name="calendar" color={theme.colors.cian} size={20} />
              {'  '}quinta-feira, 23 de julho de 2020
            </Date>
          </CalendarCardContent>
        </CalendarCard>

        <CalendarCard
          onPress={() =>
            handleNavigateTolink(
              'https://faculdadeam.edu.br/noticias/detalhes/378/saber-humano-10-anos-',
            )
          }>
          <Image source={image05} />
          <CalendarCardContent>
            <Title>Saber Humano 10 anos!</Title>

            <Date>
              <Icon name="calendar" color={theme.colors.cian} size={20} />
              {'  '}quarta-feira, 22 de julho de 2020
            </Date>
          </CalendarCardContent>
        </CalendarCard>

        <CalendarCard
          onPress={() =>
            handleNavigateTolink(
              'https://faculdadeam.edu.br/noticias/detalhes/377/amf-e-destaque-nos-resultados-da-prova-da-oab--',
            )
          }>
          <Image source={image06} />
          <CalendarCardContent>
            <Title>AMF é destaque nos resultados da prova da OAB!</Title>

            <Date>
              <Icon name="calendar" color={theme.colors.cian} size={20} />
              {'  '}quarta-feira, 24 de junho de 2020
            </Date>
          </CalendarCardContent>
        </CalendarCard>
      </CalendarView>
    </Container>
  );
};

export default Calendar;
