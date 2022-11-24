import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@app/screens/dashboard';

const DashboardStackScreen = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <DashboardStackScreen.Navigator
      name="DashboardStack"
      screenOptions={{headerShown: false}}>
      <DashboardStackScreen.Screen name="Dashboard" component={Dashboard} />
    </DashboardStackScreen.Navigator>
  );
};

export default DashboardStack;
