import styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';

import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px 8px;
  justify-content: space-between;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MarkerView = styled(Marker)`
  width: 70px;
  height: 100px;
`;

export const MarkerButton = styled.TouchableOpacity`
  border-radius: 10px;
  background: ${theme.colors.light};
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.cian};
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
`;

export const Text = styled.Text``;

export const ButtonsView = styled.View`
  padding: 16px 0;
  flex-direction: row;
`;

export const Separator = styled.View`
  margin: 6px;
`;
