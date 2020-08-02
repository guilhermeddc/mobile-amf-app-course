import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  padding: 32px 16px;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.ScrollView`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Logo = styled.Image`
  width: 320px;
  margin: 0 auto;
  height: 200px;
`;

export const FotoProfessor = styled.Image`
  margin: -10px;
  width: 136px;
  display: flex;
  justify-content: flex-start;
  height: 136px;
`;

export const ViewRow = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 245px;
`;

export const Text = styled.Text`
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.light};
`;

export const SubtitleCoordenador = styled.Text`
  margin: -5px 40px 25px;
  width: 217px;
  font-size: 15px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.light};
`;

export const SubtitleNumero = styled.Text`
  margin: 10px 20px 0px 40px;
  width: 100px;
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.red};
`;

export const SubtitleEmail = styled.Text`
  margin: 10px 20px 0px 40px;
  width: 200px;
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.red};
`;

export const Subtitle = styled.Text`
  margin: 16px 0;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.red};
`;

export const Footer = styled.View`
  border-top-color: ${theme.colors.light};
  border-top-width: 1px;
  margin-top: 8px;
  padding-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
