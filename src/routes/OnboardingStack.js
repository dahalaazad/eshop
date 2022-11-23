import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { OnboardingScreenFirst, OnboardingScreenSecond, OnboardingScreenThird } from '../screens/onboarding/onboarding-screens/index';

const OnboardingStackScreen = createStackNavigator();

const OnboardingStack = () => {
  return (
   <OnboardingStackScreen.Navigator name='OnboardingFirst'>
    <OnboardingStackScreen.Screen name='OnboardingScreenFirst' component={OnboardingScreenFirst}/>
    <OnboardingStackScreen.Screen name='OnboardingScreenSecond' component={OnboardingScreenSecond}/>
    <OnboardingStackScreen.Screen name='OnboardingScreenThird' component={OnboardingScreenThird}/>
   </OnboardingStackScreen.Navigator>
  )
}

export default OnboardingStack