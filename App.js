import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen, SplashScreen, Login, Signup} from '@app/screens';
import {StatusBar} from 'react-native';
import {MainStack} from '@app/routes';
import {Colors} from '@app/constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const firstLoad = useSelector(state => state?.auth?.firstLoad);
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  return (
    <>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />

            {isLoggedIn ? (
              <Stack.Screen name="MainStack" component={MainStack} />
            ) : (
              <Stack.Group>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />

                {firstLoad ? (
                  <Stack.Group>
                    <Stack.Screen
                      name="OnboardingScreen"
                      component={OnboardingScreen}
                    />

                    <Stack.Screen name="SignupPage" component={Signup} />
                  </Stack.Group>
                ) : null}

                <Stack.Screen name="LoginPage" component={Login} />
              </Stack.Group>
            )}
          </Stack.Navigator>

          <StatusBar backgroundColor={Colors.loginBackgroundColor} />
        </GestureHandlerRootView>
      </NavigationContainer>

      <Toast />
    </>
  );
};

export default App;
