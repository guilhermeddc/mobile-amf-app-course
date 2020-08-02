import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Main} from './styles';

import Navigator from '../../components/Navigator';
import CourcesCard from '../../components/CourcesCard';

import Administration from '../../assets/graduacao-administracao.jpg';
import lawSchool from '../../assets/graduacao-direito.jpg';
import Ontopsychology from '../../assets/graduacao-ontopsicologia.jpg';
import Pedagogy from '../../assets/graduacao-pedagogia.jpg';
import InformationSystems from '../../assets/graduacao-sistemas.jpg';

const Courses = () => {
  const {navigate, goBack} = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Navigator
        onPress={handleNavigateBack}
        title="Conheça os cursos de graduação da"
        spotlight=" AMF"
      />
      <Main showsVerticalScrollIndicator={false}>
        <CourcesCard
          title="Ontopsicologia"
          image={Ontopsychology}
          onPress={() => navigate('Onto')}
        />
        <CourcesCard
          title="Administração"
          image={Administration}
          onPress={() => navigate('Admin')}
        />
        <CourcesCard
          title="Sistemas de Informação"
          image={InformationSystems}
          onPress={() => navigate('SI')}
        />
        <CourcesCard
          title="Direito"
          image={lawSchool}
          onPress={() => navigate('Law')}
        />
        <CourcesCard
          title="Pedagogia"
          image={Pedagogy}
          onPress={() => navigate('Pedagogy')}
        />
      </Main>
    </Container>
  );
};

export default Courses;
