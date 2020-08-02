import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';

import {Container, Title} from './styles';

import theme from '../../styles/theme';

interface IActionButton {
  onPress(): void;
  label: string;
  icon: string;
}

const ActionButton: React.FC<IActionButton> = ({onPress, label, icon}) => {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} color={theme.colors.light} size={24} />
      <Title>{label}</Title>
    </Container>
  );
};

export default ActionButton;
