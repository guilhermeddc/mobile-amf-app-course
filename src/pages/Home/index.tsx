import React, {useState} from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {View, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  Logo,
  Title,
  Subtitle,
  Input,
  Button,
  ButtonText,
  IconView,
} from './styles';

import theme from '../../styles/theme';

const Home = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Introduction', {
      name,
      phone,
    });
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
      </Header>

      <View>
        <Title>Acredite em você e faça acontecer!</Title>
        <Subtitle>Vestibular de inverno AMF 2020</Subtitle>
      </View>

      <View>
        <Subtitle>Deixe seu contato (opcional)</Subtitle>
        <Input
          placeholder="Nome"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
          placeholderTextColor={theme.colors.gray}
        />
        <Input
          placeholder="Telefone"
          autoCorrect={false}
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor={theme.colors.gray}
        />
        <Button onPress={handleNavigateToPoints}>
          <ButtonText>Entrar</ButtonText>
          <IconView>
            <Icon name="arrow-right" color="#fff" size={24} />
          </IconView>
        </Button>
      </View>
    </Container>
  );
};

export default Home;
