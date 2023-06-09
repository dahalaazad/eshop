import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@app/constants';
import {
  ProductDetails,
  MyCart,
  ChangePassword,
  EditProfile,
  UserProfile,
  UserSettings,
} from '@app/screens';
import {Button, Text, View, Image} from 'react-native';
import {FavoriteButton} from '@app/commons';
import BottomTabNav from './BottomTabNav';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator
      name="MainStack"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.loginBackgroundColor,
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '500',
          fontFamily: 'Poppins',
        },
      }}>
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerTitle: '',
          headerRight: () => <FavoriteButton />,
        }}
      />

      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerTitle: 'My Cart',
        }}
      />

      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerTitle: 'Profile',
        }}
      />

      <Stack.Screen
        name="UserSettings"
        component={UserSettings}
        options={{
          headerTitle: 'Settings',
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerStyle: {
            backgroundColor: Colors.whiteColor,
          },
          headerTitle: 'Change Password',
          headerTitleStyle: {
            color: Colors.changePasswordHeaderColor,
            fontFamily: 'Sofia Pro',
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerStyle: {
            backgroundColor: Colors.whiteColor,
          },
          headerTitle: 'Edit Profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
