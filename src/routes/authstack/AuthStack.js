import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen, SplashScreen, Login, Signup} from '@app/screens';
import {MainStack} from '@app/routes/mainstack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const firstLoad = useSelector(state => state?.auth?.firstLoad);
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {firstLoad ? (
        <Stack.Group>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

          <Stack.Screen name="SignupPage" component={Signup} />
        </Stack.Group>
      ) : null}
      <Stack.Screen name="LoginPage" component={Login} />
      {isLoggedIn && <Stack.Screen name="MainStack" component={MainStack} />}
    </Stack.Navigator>
  );
};

export default AuthStack;
