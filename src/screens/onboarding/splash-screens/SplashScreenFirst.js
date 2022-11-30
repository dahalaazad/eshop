import {View, Text, Button, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '@app/constants';
import {MainLogo }from '@app/assets/svg';

export default function SplashScreenFirst({navigation}) {
  const [bottomValue, setBottomValue] = useState(new Animated.Value(100));

  const animatedStyles = {
    transform: [{translateY: bottomValue}],
  };

  const moveLogo = () => {
    Animated.timing(bottomValue, {
      toValue: -250,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => navigation.navigate('OnboardingScreenFirst'), 4000);
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
