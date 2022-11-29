import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {AuthStack, MainStack} from '@app/routes';

const App = () => {
  return (
    <NavigationContainer>
      {/* THERE CANNOT BE TWO STACKS HERE */}
      <AuthStack />
      {/* To disable Login Module for testing during development, uncomment the below line */}
      {/* <MainStack/> */}
    </NavigationContainer>
  );
};

export default App;
