import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '@app/screens';
import {StatusBar} from 'react-native';
import {AuthStack, MainStack} from '@app/routes';
import {Colors} from '@app/constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
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
              <Stack.Screen name="AuthStack" component={AuthStack} />
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
