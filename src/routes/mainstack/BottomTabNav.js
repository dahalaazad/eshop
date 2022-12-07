import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingCart} from '@app/screens';
import {Colors} from '@app/constants';
import HomeIcon from '@app/assets/svg/HomeIcon.svg';
import ShopIcon from '@app/assets/svg/ShopIcon.svg';
import CartIcon from '@app/assets/svg/CartIcon.svg';
import ProfileIcon from '@app/assets/svg/ProfileIcon.svg';
import DashboardStack from './DashboardStack';
import ShopStack from './ShopStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'DashboardStack':
              iconName = focused ? (
                <HomeIcon style={{color: Colors.iconBlueColor}} />
              ) : (
                <HomeIcon style={{color: Colors.inactiveIconGrayColor}} />
              );
              break;

            case 'Shop':
              iconName = focused ? (
                <ShopIcon style={{color: Colors.iconBlueColor}} />
              ) : (
                <ShopIcon style={{color: Colors.inactiveIconGrayColor}} />
              );
              break;

            case 'Cart':
              iconName = focused ? (
                <CartIcon style={{color: Colors.iconBlueColor}} />
              ) : (
                <CartIcon style={{color: Colors.inactiveIconGrayColor}} />
              );
              break;

            case 'Account':
              iconName = focused ? (
                <ProfileIcon style={{color: Colors.iconBlueColor}} />
              ) : (
                <ProfileIcon style={{color: Colors.inactiveIconGrayColor}} />
              );
              break;

            default:
              <HomeIcon style={{color: Colors.inactiveIconGrayColor}} />;
          }

          return iconName;
        },

        tabBarActiveTintColor: Colors.iconBlueColor,
        tabBarInactiveTintColor: Colors.inactiveIconGrayColor,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.loginBackgroundColor,
          elevation: 0,
          shadowOpacity: 0,
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
