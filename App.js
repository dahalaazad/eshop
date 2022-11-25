import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {AuthStack, MainStack} from '@app/routes';
import {Colors} from '@app/constants';

const App = () => {
  return (
    <NavigationContainer>
      {/* THERE CANNOT BE TWO STACKS HERE */}
      <AuthStack />
      <StatusBar backgroundColor={Colors.loginBackgroundColor} />
    </NavigationContainer>
  );
};

export default App;
