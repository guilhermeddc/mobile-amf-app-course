import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, CalendarView} from './styles';

import events from '../../utils/calendarEvents';
import Navigator from '../../components/Navigator';
import CalendarCard from '../../components/CalendarCard';

const Calendar: React.FC = () => {
  const {goBack} = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Navigator
        onPress={handleNavigateBack}
        title="Calendario de"
        spotlight=" eventos"
      />
      <CalendarView>
        {events?.map((item) => {
          <CalendarCard
            key={item.id}
            onPress={() => {}}
            title={item.title}
            date={item.date}
            // image={item.image}
          />;
        })}
      </CalendarView>
    </Container>
  );
};

export default Calendar;
