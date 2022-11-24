import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingCart} from '@app/screens/cart';
import {UserAccount} from '@app/screens/profile';
import {Colors} from '@app/constants';
import {DashboardStack, ShopStack,ProfileStack} from '.';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.primaryBlue,
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#d2d4dc',
        },
      })}>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          title: 'For You',
          headerShown:false
        }}
      />

      <Tab.Screen name="Shop" component={ShopStack} />

      <Tab.Screen name="Cart" component={ShoppingCart} />

      <Tab.Screen name="Account" component={ProfileStack} options={{headerShown:false}} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
