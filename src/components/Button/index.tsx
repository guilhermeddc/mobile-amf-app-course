import React from 'react';

import {Container, Text} from './styles';
import theme from '../../styles/theme';

interface IButton {
  label: string;
  onPress(): void;
  background: string;
  color?: string;
}

const Button: React.FC<IButton> = ({
  children,
  label,
  onPress,
  background,
  color = theme.colors.light,
}) => {
  return (
    <Container onPress={onPress} background={background}>
      {children}
      <Text color={color}>{label}</Text>
    </Container>
  );
};

export default Button;
