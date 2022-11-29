import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingCart} from '@app/screens';
import {UserAccount} from '@app/screens';
import {Colors} from '@app/constants';
import {DashboardStack, ShopStack, ProfileStack} from '.';
import HomeIcon from '@app/assets/svg/HomeIcon.svg';
import ShopIcon from '@app/assets/svg/ShopIcon.svg';
import CartIcon from '@app/assets/svg/CartIcon.svg';
import ProfileIcon from '@app/assets/svg/ProfileIcon.svg';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'DashboardStack') {
            iconName = focused ? (
              <HomeIcon style={{color: Colors.iconBlueColor}} />
            ) : (
              <HomeIcon style={{color: Colors.inactiveIconGrayColor}} />
            );
          } else if (route.name === 'Shop') {
            iconName = focused ? (
              <ShopIcon style={{color: Colors.iconBlueColor}} />
            ) : (
              <ShopIcon style={{color: Colors.inactiveIconGrayColor}} />
            );
          } else if (route.name === 'Cart') {
            iconName = focused ? (
              <CartIcon style={{color: Colors.iconBlueColor}} />
            ) : (
              <CartIcon style={{color: Colors.inactiveIconGrayColor}} />
            );
          } else if (route.name === 'Account') {
            iconName = focused ? (
              <ProfileIcon style={{color: Colors.iconBlueColor}} />
            ) : (
              <ProfileIcon style={{color: Colors.inactiveIconGrayColor}} />
            );
          }

          // You can return any component that you like here!
          return iconName;
        },

        tabBarActiveTintColor: Colors.iconBlueColor,
        tabBarInactiveTintColor: Colors.inactiveIconGrayColor,
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
        options={{
          headerTitle: 'All Product',
        }}
      />

      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          headerTitle: 'Shopping Cart',
        }}
      />

      <Tab.Screen
        name="Account"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
