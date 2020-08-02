import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import theme from '../../styles/theme';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 32px 16px;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding-top: 50px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 320px;
`;

export const Title = styled.Text`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.medium};
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;

export const Subtitle = styled.Text`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  height: 48px;
  font-size: 18px;
  background: ${theme.colors.light};
  margin: 4px 16px;
  padding: 0px 32px;
  border-radius: 25px;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: ${theme.colors.light};
  margin: 12px 16px 32px;
  border-radius: 25px;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.medium};
  font-size: 18px;
  margin-left: 52px;
  width: 100%;
  text-align: center;
`;

export const IconView = styled.View`
  background: ${theme.colors.secondary};
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 52px;
  border-radius: 25px;
`;
