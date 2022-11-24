import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileStackScreen  =createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <ProfileStackScreen.Navigator name='ProfileStack'>
      <ProfileStackScreen.Screen name='AccountPage' />
    </ProfileStackScreen.Navigator>
  )
}

export default ProfileStack