import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShoppingCart } from '@app/screens';

const CartStackScreen = createNativeStackNavigator();

const CartStack = () => {
  return (
     <CartStackScreen.Navigator name='CartStack'>
      <CartStackScreen.Screen name='ShoppingCart' component={ShoppingCart}/>
     </CartStackScreen.Navigator>
    )
}

export default CartStack