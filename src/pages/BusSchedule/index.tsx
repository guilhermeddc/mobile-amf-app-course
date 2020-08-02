import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ScrollView,
  Title,
  Info,
  Site,
  TitleTable,
  Days,
  Schedules,
  Separator,
} from './styles';

import {
  santaMariaToSaoJose,
  saoJoseToSantaMaria,
  santaMariaToRestingaSeca,
  restingaSecaToSantaMaria,
} from '../../utils/schedules';
import Navigator from '../../components/Navigator';

const BusSchedule: React.FC = () => {
  const {goBack} = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Navigator
        onPress={handleNavigateBack}
        title="Horários de"
        spotlight=" ônibus"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Santa Maria ao Recanto Maestro (ida e volta)</Title>
        <Info>Empresa: EFAL (tel. 55 3222-3567 e 3222-0909)</Info>
        <Info>
          Local de Saída: Rodoviária de Santa Maria (tel. 55 3222-4747)
        </Info>

        <TitleTable>Santa Maria</TitleTable>
        {santaMariaToSaoJose?.map((item) => (
          <View key={item.id}>
            <Days>{item.day}</Days>
            {item.schedules?.map((schedule, index) => (
              <Schedules key={index}>{schedule}</Schedules>
            ))}
          </View>
        ))}
        <TitleTable>São José de Vale Veneto</TitleTable>
        {saoJoseToSantaMaria?.map((item) => (
          <View key={item.id}>
            <Days>{item.day}</Days>
            {item.schedules?.map((schedule, index) => (
              <Schedules key={index}>{schedule}</Schedules>
            ))}
          </View>
        ))}
        <Separator />

        <Info>Sites</Info>
        <TouchableOpacity>
          <Site>www.rodoviariasantamaria.com.br/site/default.asp</Site>
        </TouchableOpacity>
        <TouchableOpacity>
          <Site>
            www.faxinaldosoturno.rs.gov.br/o-municipio/horarios-de-onibus
          </Site>
        </TouchableOpacity>

        <Separator />
        <Separator />

        <Title>Restinga Sêca à Santa Maria (ida e volta)</Title>
        <Info>Empresa: RIZZATTI RESTINGA SÊCA (tel. 55 3261-1411)</Info>
        <Info>Local de Saída: Restinga Sêca (rodoviária)</Info>

        <TitleTable>Restinga Sêca</TitleTable>
        {santaMariaToRestingaSeca?.map((item) => (
          <View key={item.id}>
            <Days>{item.day}</Days>
            {item.schedules?.map((schedule, index) => (
              <Schedules key={index}>{schedule}</Schedules>
            ))}
          </View>
        ))}

        <TitleTable>Santa Maria</TitleTable>
        {restingaSecaToSantaMaria?.map((item) => (
          <View key={item.id}>
            <Days>{item.day}</Days>
            {item.schedules?.map((schedule, index) => (
              <Schedules key={index}>{schedule}</Schedules>
            ))}
          </View>
        ))}

        <Separator />

        <Info>Sites</Info>
        <TouchableOpacity>
          <Site>www.transportesrizzatti.com.br/horario_de_onibus</Site>
        </TouchableOpacity>
        <TouchableOpacity>
          <Site>www.rodoviariasantamaria.com.br/site/default.asp</Site>
        </TouchableOpacity>
        <Separator />
      </ScrollView>
    </Container>
  );
};

export default BusSchedule;
