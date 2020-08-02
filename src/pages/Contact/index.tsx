import React, {useCallback} from 'react';
import {Linking, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather, FontAwesome} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import {
  Container,
  MapContainer,
  Map,
  MarkerView,
  MarkerButton,
  Image,
  Text,
  ButtonsView,
  Separator,
} from './styles';
import theme from '../../styles/theme';

import Logo from '../../assets/logo-amf-170x170.png';
import Navigator from '../../components/Navigator';
import Button from '../../components/Button';

const Contact: React.FC = () => {
  const {goBack} = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleOpenGPSLocation = useCallback(() => {
    const location = '-29.6988516,-53.5180287';
    const urlIos = `maps:${location}`;
    const urlAndroid = `geo:${location}?center=${location}&q=${location}&z=16`;
    Linking.openURL(Platform.OS === 'ios' ? urlIos : urlAndroid);
  }, []);

  const handleComposeMail = useCallback(() => {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: ['amf@faculdadeam.edu.br'],
    });
  }, []);

  const handleWhatsapp = useCallback(() => {
    Linking.openURL(
      'whatsapp://send?phone=+555599641-0945&text=Tenho interesse sobre os cursos disponibilizados da AMF',
    );
  }, []);

  return (
    <Container>
      <Navigator
        onPress={handleNavigateBack}
        title="Entre em contato com a"
        spotlight=" AMF"
      />
      <MapContainer>
        <Map
          initialRegion={{
            latitude: -29.6988516,
            longitude: -53.5180287,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}>
          <MarkerView
            onPress={() => handleOpenGPSLocation()}
            coordinate={{
              latitude: -29.6988516,
              longitude: -53.5180287,
            }}>
            <MarkerButton>
              <Image source={Logo} />
              <Text>AMF</Text>
            </MarkerButton>
          </MarkerView>
        </Map>
      </MapContainer>
      <ButtonsView>
        <Button
          label="E-mail"
          onPress={() => handleComposeMail}
          background={theme.colors.cian}>
          <Feather name="mail" size={24} color={theme.colors.light} />
        </Button>
        <Separator />
        <Button
          label="Whatsapp"
          onPress={() => handleWhatsapp}
          background={theme.colors.green}>
          <FontAwesome name="whatsapp" size={24} color={theme.colors.light} />
        </Button>
      </ButtonsView>
    </Container>
  );
};

export default Contact;
