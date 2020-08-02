import React from 'react';

import {Container, Image, Title, Date} from './styles';

interface ICalendarCard {
  image?: string;
  title: string;
  date: string;
  onPress(): void;
}

const CalendarCard: React.FC<ICalendarCard> = ({
  image,
  title,
  date,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      {!!image && <Image source={{uri: image}} />}
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Container>
  );
};

export default CalendarCard;
