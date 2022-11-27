import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNav} from '.';
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
import {BackButton, FavoriteButton} from '@app/commons';
import {TouchableOpacity} from 'react-native';
import AD from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator
      name="MainStack"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.mainBackgroundColor,
        },
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
          headerBackTitle: 'Go Back',
          headerTitleStyle: {color: '#000'},
          headerLeft: () => <BackButton />,
          headerRight: () => <FavoriteButton />,
        }}
      />

      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerTitle: 'My Cart',
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />

      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />

      <Stack.Screen
        name="UserSettings"
        component={UserSettings}
        options={{
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: 'Change Password',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Sofia Pro',
            fontSize: 20,
            fontWeight: '500',
          },
          headerLeft: () => <BackButton />,
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: 'Edit Profile',
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
