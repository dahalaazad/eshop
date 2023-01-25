import {View, Text, Button, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Colors} from '@app/constants';
import {MainLogo} from '@app/assets/svg';
import {useSelector} from 'react-redux';

export default function SplashScreen({navigation}) {
  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  const [bottomValue, setBottomValue] = useState(new Animated.Value(100));
  const animatedStyles = {
    transform: [{translateY: bottomValue}],
  };

  const moveLogo = useCallback(() => {
    Animated.timing(bottomValue, {
      toValue: -250,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(
      () => navigation.navigate(isLoggedIn ? 'MainStack' : 'AuthStack'),
      1500,
    );
  }, [bottomValue, isLoggedIn, navigation]);

  useEffect(() => {
    moveLogo();
  }, [moveLogo]);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyles}>
        <MainLogo style={styles.mainLogoStyle} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backButtonBlueColor,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  mainLogoStyle: {
    color: Colors.whiteColor,
  },
});
