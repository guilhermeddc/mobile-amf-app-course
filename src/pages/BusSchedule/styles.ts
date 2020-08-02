import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px 8px;
  justify-content: space-between;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 8px;
`;

export const Title = styled.Text`
  color: ${theme.colors.light};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Info = styled.Text`
  color: ${theme.colors.gray};
  font-size: 13px;
`;

export const Site = styled.Text`
  color: ${theme.colors.cian};
  font-size: 12px;
`;

export const TitleTable = styled.Text`
  color: ${theme.colors.light};
  font-size: 16px;
  padding: 16px;
  background: ${theme.colors.cian};
  margin: 8px 0 0;
`;

export const Days = styled.Text`
  color: ${theme.colors.dark};
  background: ${theme.colors.light};
  font-size: 16px;
  padding: 8px 0 8px 16px;
`;

export const Schedules = styled.Text`
  color: ${theme.colors.light};
  font-size: 16px;
  border-width: 1px;
  border-color: ${theme.colors.light};
  padding: 8px 0 8px 16px;
`;

export const Separator = styled.View`
  margin: 10px;
`;
