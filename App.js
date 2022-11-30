import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {AuthStack, MainStack} from '@app/routes';
import {Colors} from '@app/constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* THERE CANNOT BE TWO STACKS HERE */}
        <AuthStack />
        <StatusBar backgroundColor={Colors.loginBackgroundColor} />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
