import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainStack } from '@app/routes/mainstack';
import OnboardingStack from './OnboardingStack';
import LoginStack from './LoginStack';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

      <Stack.Screen name="LoginStack" component={LoginStack} />

      <Stack.Screen name='MainStack' component={MainStack}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
