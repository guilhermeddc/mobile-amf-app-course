import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px 8px;
  justify-content: space-between;
`;

export const CalendarView = styled.ScrollView`
  flex: 1;
  margin-top: 16px;
`;

export const CalendarCard = styled.TouchableOpacity`
  width: 100%;
  background: ${theme.colors.light};
  margin-bottom: 16px;
`;

export const CalendarCardContent = styled.View`
  padding: 16px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Title = styled.Text`
  color: ${theme.colors.cian};
  font-family: ${theme.fonts.medium};
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Date = styled.Text`
  align-items: center;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.gray};
`;
