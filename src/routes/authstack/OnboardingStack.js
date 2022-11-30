import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnboardingScreenFirst,
  OnboardingScreenSecond,
  OnboardingScreenThird,
  SplashScreenFirst,
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
        name="SplashScreenFirst"
        component={SplashScreenFirst}
        options={{
          title: 'Splash One',
        }}
      />
      
      <OnboardingStackScreen.Screen
        name="OnboardingScreenFirst"
        component={OnboardingScreenFirst}
        options={{
          title: 'Onboarding One',
        }}
      />
      <OnboardingStackScreen.Screen
        name="OnboardingScreenSecond"
        component={OnboardingScreenSecond}
        options={{
          title: 'Onboarding Two',
        }}
      />
      <OnboardingStackScreen.Screen
        name="OnboardingScreenThird"
        component={OnboardingScreenThird}
        options={{
          title: 'Onboarding Three',
        }}
      />
    </OnboardingStackScreen.Navigator>
  );
};

export default OnboardingStack;
