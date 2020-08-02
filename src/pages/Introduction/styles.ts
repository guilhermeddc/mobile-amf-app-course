import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import theme from '../../styles/theme';

interface IFlatList {
  id: number;
  icon: string;
  label: string;
  navigate: string;
  onPress: () => {};
}
[];

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px 8px;
  justify-content: space-between;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin: 16px 0 8px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.light};
  text-transform: uppercase;
  text-align: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.light};
  padding-bottom: 8px;
`;

export const Text = styled.Text`
  text-align: justify;
  font-size: 13.5px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.light};
`;

export const Carroucel = styled(
  FlatList as new () => FlatList<IFlatList>,
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 16px;
  height: 180px;
`;
