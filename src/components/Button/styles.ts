import styled from 'styled-components/native';

interface IConatainer {
  background: string;
}

interface IText {
  color: string;
}

export const Container = styled.TouchableOpacity<IConatainer>`
  background: ${(props) => props.background};
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
`;

export const Text = styled.Text<IText>`
  color: ${(props) => props.color};
  margin-left: 16px;
  font-size: 18px;
`;
