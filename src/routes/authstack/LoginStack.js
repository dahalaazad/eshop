import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../../screens/login';

const LoginStackScreen = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <LoginStackScreen.Navigator
      name="LoginStack"
      screenOptions={{headerShown: false}}
    >
      <LoginStackScreen.Screen name="SignupPage" component={Signup} />
      
      <LoginStackScreen.Screen name="LoginPage" component={Login} />
    </LoginStackScreen.Navigator>
  );
};

export default LoginStack;
