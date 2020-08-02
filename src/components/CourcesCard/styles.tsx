import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.TouchableOpacity`
  height: 280px;
  max-width: 370px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.light};
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  text-align: center;
  padding: 8px;
  font-size: 18px;
  color: ${theme.colors.dark};
  font-family: ${theme.fonts.medium};
`;

export const Image = styled.Image`
  border-radius: 4px;
  height: 240px;
`;
