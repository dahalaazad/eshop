import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Shop} from '@app/screens';
import {ProductDetails} from '@app/screens';

const ShopStackScreen = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <ShopStackScreen.Navigator
      name="ShopStack"
      screenOptions={{headerShown: false}}>
      <ShopStackScreen.Screen name="ShopPage" component={Shop} />
    </ShopStackScreen.Navigator>
  );
};

export default ShopStack;
