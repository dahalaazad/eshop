import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingCart} from '@app/screens';
import {UserAccount} from '@app/screens';
import {Colors} from '@app/constants';
import {DashboardStack, ShopStack, ProfileStack} from '.';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.textLinkColor,
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.mainBackgroundColor,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '500',
          fontFamily: 'Poppins',
        },
      })}>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          title: 'For You',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{headerTitle: 'All Product'}}
      />

      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{headerTitle: 'Shopping Cart'}}
      />

      <Tab.Screen
        name="Account"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
