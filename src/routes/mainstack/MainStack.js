import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNav} from '.';
import {ProductDetails} from '@app/screens/product-details';
import {MyCart} from '@app/screens/cart';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      name="MainStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />

      <Stack.Screen name="ProductDetails" component={ProductDetails} />

      <Stack.Screen name="MyCart" component={MyCart} />
    </Stack.Navigator>
  );
};

export default MainStack;
