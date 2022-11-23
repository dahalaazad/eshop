import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import OnboardingStack from './src/routes/OnboardingStack';

const App = () => {
  return (
    <NavigationContainer>
      <OnboardingStack/>
    </NavigationContainer>
  );
};

export default App;
