import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserAccount} from '@app/screens';

const ProfileStackScreen = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <ProfileStackScreen.Navigator name="ProfileStack">
      <ProfileStackScreen.Screen name="UserAccount" component={UserAccount} options={{headerShown:false}} />
    </ProfileStackScreen.Navigator>
  );
};

export default ProfileStack;
