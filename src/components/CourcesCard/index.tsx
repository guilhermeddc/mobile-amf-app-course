import React from 'react';
import {ImageSourcePropType} from 'react-native';

import {Container, Image, Title} from './styles';

interface ICourcesCard {
  onPress(): void;
  title: string;
  image: ImageSourcePropType;
}

const CourcesCard: React.FC<ICourcesCard> = ({onPress, title, image}) => {
  return (
    <Container onPress={onPress}>
      <Image source={image} />
      <Title>{title}</Title>
    </Container>
  );
};

export default CourcesCard;
