import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconView = styled.TouchableOpacity`
  background: ${theme.colors.light};
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 52px;
  border-radius: 25px;
`;

export const Title = styled.Text`
  text-align: center;
  flex: 1;
  font-size: 20px;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.medium};
  margin-right: 52px;
`;

export const Red = styled.Text`
  color: ${(props) => props.color};
`;
