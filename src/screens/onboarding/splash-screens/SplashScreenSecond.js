import {View, Text, Button} from 'react-native';
import React from 'react';

export default function SplashScreenSecond({navigation}) {
  return (
    <View>
      <Text>SplashScreenSecond</Text>
      <Button
        title="Go to 1st onboarding page"
        onPress={() => navigation.navigate('OnboardingScreenFirst')}
      />
    </View>
  );
}
