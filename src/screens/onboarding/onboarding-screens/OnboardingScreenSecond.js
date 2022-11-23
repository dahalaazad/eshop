import {View, Text, Button} from 'react-native';
import React from 'react';

export default function OnboardingScreenSecond({navigation}) {
  return (
    <View>
      <Text>OnboardingScreenSecond</Text>
      <Button
        title="Go to 3rd onboarding page"
        onPress={() => navigation.navigate('OnboardingScreenThird')}
      />
    </View>
  );
}
