import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  padding: 32px 16px 0px;
  justify-content: center;
  align-items: center;
`;

export const MainCourses = styled.ScrollView`
  padding: 0 0 32px 0;
  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 320px;
  margin: 0 auto;
  height: 200px;
`;

export const FotoProfessor = styled.Image`
  margin: -10px;
  width: 130px;
  display: flex;
  justify-content: flex-start;
  height: 136px;
`;

export const Main = styled.ScrollView`
  margin-top: 16px;
  margin-bottom: 64px;
`;

export const Text = styled.Text`
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.light};
`;

export const Subtitle = styled.Text`
  margin: 16px 0;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.primary};
`;

export const SubtitleY = styled.Text`
  margin: 16px 0;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.yellow};
`;

export const SubtitleP = styled.Text`
  margin: 16px 0;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.purple};
`;

export const SubtitleProfessor = styled.Text`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  width: 100px;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.cian};
`;

export const SubtitleC = styled.Text`
  margin: 16px 0;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.cian};
`;

export const SubtitleR = styled.Text`
  margin: 16px 0;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.red};
`;

export const TitleType = styled.Text`
  margin: 8px 0;
  text-align: center;
  font-size: 14px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.gray};
`;

export const SubtitleType = styled.Text`
  margin: 0 0 16px;
  text-align: center;
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.primary};
`;

export const SubtitleTypeY = styled.Text`
  margin: 0 0 16px;
  text-align: center;
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.yellow};
`;

export const SubtitleTypeP = styled.Text`
  margin: 0 0 16px;
  text-align: center;
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.purple};
`;

export const SubtitleTypeC = styled.Text`
  margin: 0 0 16px;
  text-align: center;
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.cian};
`;

export const SubtitleTypeR = styled.Text`
  margin: 0 0 16px;
  text-align: center;
  font-size: 14px;
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

export const IconView = styled.View`
  width: 23%;
`;

export const Icon = styled.Image`
  margin: 0 auto;
`;
