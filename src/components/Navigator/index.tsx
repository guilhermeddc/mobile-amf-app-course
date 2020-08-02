import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';

import {Container, IconView, Title, Red} from './styles';

import theme from '../../styles/theme';

interface INagivator {
  onPress(): void;
  title: string;
  spotlight?: string;
  color?: string;
}

const Nagivator: React.FC<INagivator> = ({
  onPress,
  title,
  spotlight,
  color = theme.colors.secondary,
}) => {
  return (
    <Container>
      <IconView onPress={onPress}>
        <Icon name="arrow-left" color={color} size={24} />
      </IconView>
      <Title>
        {title}
        <Red color={color}>{spotlight}</Red>
      </Title>
    </Container>
  );
};

export default Nagivator;
