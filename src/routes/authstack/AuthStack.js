import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnboardingScreen,
  OnboardingScreenTwo,
  OnboardingScreenThree,
  Login,
  Signup,
} from '@app/screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const firstLoad = useSelector(state => state?.auth?.firstLoad);

  return (
    <Stack.Navigator name="AuthStack" screenOptions={{headerShown: false}}>
      {firstLoad && (
        <Stack.Group>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

          <Stack.Screen
            name="OnboardingScreenTwo"
            component={OnboardingScreenTwo}
          />

          <Stack.Screen
            name="OnboardingScreenThree"
            component={OnboardingScreenThree}
          />
        </Stack.Group>
      )}
      <Stack.Screen name="SignupPage" component={Signup} />

      <Stack.Screen name="LoginPage" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
