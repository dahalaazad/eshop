import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {AuthStack, MainStack} from '@app/routes';
import {Colors} from '@app/constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const App = () => {
  const product = useSelector(state => state.product);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* THERE CANNOT BE TWO STACKS HERE */}
        {/* <AuthStack /> */}
        <MainStack />
        <StatusBar backgroundColor={Colors.loginBackgroundColor} />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
