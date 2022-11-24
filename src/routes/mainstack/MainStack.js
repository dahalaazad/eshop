import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNav} from '.';
import {ProductDetails} from '@app/screens';
import {MyCart} from '@app/screens';
import {
  ChangePassword,
  EditProfile,
  UserProfile,
  UserSettings,
} from '@app/screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator name="MainStack">
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{headerShown:false}} />

      <Stack.Screen name="ProductDetails" component={ProductDetails} />

      <Stack.Screen name="MyCart" component={MyCart} />

      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default MainStack;
