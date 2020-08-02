import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 120px;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.secondary};
  margin-right: 16px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.medium};
`;
