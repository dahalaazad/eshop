import {View, Text, Button, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '@app/constants';
import {MainLogo} from '@app/assets/svg';
import {useSelector} from 'react-redux';

export default function SplashScreen({navigation}) {
  const firstLoad = useSelector(state => state?.auth?.firstLoad);

  const [bottomValue, setBottomValue] = useState(new Animated.Value(100));
  const animatedStyles = {
    transform: [{translateY: bottomValue}],
  };

  const moveLogo = () => {
    Animated.timing(bottomValue, {
      toValue: -250,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(
      () => navigation.navigate(firstLoad ? 'OnboardingScreen' : 'LoginPage'),
      1500,
    );
  };

  useEffect(() => {
    moveLogo();
  }, []);

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
