import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen, Login, Signup} from '@app/screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const firstLoad = useSelector(state => state?.auth?.firstLoad);

  return (
    <Stack.Navigator name="AuthStack" screenOptions={{headerShown: false}}>
      {firstLoad ? (
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      ) : null}
      <Stack.Screen name="SignupPage" component={Signup} />

      <Stack.Screen name="LoginPage" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
