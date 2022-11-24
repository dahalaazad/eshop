import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingStack, LoginStack} from '.';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

      <Stack.Screen name="LoginStack" component={LoginStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
