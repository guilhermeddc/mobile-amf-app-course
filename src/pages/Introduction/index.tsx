import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Title, Text, ScrollView, Carroucel} from './styles';

import institucional from '../../utils/institucional';
import Data from '../../utils/itemListData';

import Navigator from '../../components/Navigator';
import ActionButton from '../../components/ActionButton';
import {View} from 'react-native';

interface IFlatList {
  id: number;
  icon: string;
  label: string;
  navigate: string;
  onPress: () => {};
}

const Introduction: React.FC = () => {
  const {navigate, goBack} = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleNagivateTo = useCallback(
    (nav) => {
      navigate(String(nav));
    },
    [navigate],
  );

  return (
    <Container>
      <Navigator
        onPress={handleNavigateBack}
        title="Institucional"
        spotlight=" AMF"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {institucional?.map((item) => (
          <View key={item.id}>
            <Title>{item.title}</Title>
            <Text>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Carroucel
        data={Data as IFlatList[]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <ActionButton
            label={item.label}
            icon={item.icon}
            onPress={() => handleNagivateTo(item.navigate)}
          />
        )}
      />
    </Container>
  );
};

export default Introduction;
