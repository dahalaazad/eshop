import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnboardingScreen,
  SplashScreen,
} from '@app/screens';

const OnboardingStackScreen = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <OnboardingStackScreen.Navigator
      name="OnboardingStack"
      screenOptions={{headerShown:false,
        headerTitleAlign: 'center',
      }}>
      <OnboardingStackScreen.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          title: 'Splash One',
        }}
      />
      
      <OnboardingStackScreen.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          title: 'Onboarding One',
        }}
      />
    </OnboardingStackScreen.Navigator>
  );
};

export default OnboardingStack;
