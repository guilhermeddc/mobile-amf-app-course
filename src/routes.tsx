import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Courses from './pages/Courses';
import SI from './pages/Courses/InformationSystems';
import Onto from './pages/Courses/Ontopsychology';
import Pedagogy from './pages/Courses/Pedagogy';
import Admin from './pages/Courses/Administration';
import Law from './pages/Courses/lawSchool';
import Methodology from './pages/Methodology-foil';
import Contact from './pages/Contact';
import BusSchedule from './pages/BusSchedule';
import Calendar from './pages/Calendar';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#071C2F',
          },
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Introduction" component={Introduction} />
        <AppStack.Screen name="Courses" component={Courses} />
        <AppStack.Screen name="SI" component={SI} />
        <AppStack.Screen name="Onto" component={Onto} />
        <AppStack.Screen name="Pedagogy" component={Pedagogy} />
        <AppStack.Screen name="Admin" component={Admin} />
        <AppStack.Screen name="Law" component={Law} />
        <AppStack.Screen name="Methodology" component={Methodology} />
        <AppStack.Screen name="Contact" component={Contact} />
        <AppStack.Screen name="BusSchedule" component={BusSchedule} />
        <AppStack.Screen name="Calendar" component={Calendar} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
