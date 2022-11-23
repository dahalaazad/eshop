import {View, Text, Button} from 'react-native';
import React from 'react';

export default function OnboardingScreenFirst({navigation}) {
  return (
    <View>
      <Text style={{color:'#000'}} >OnboardingScreenFirst</Text>
      <Button
        title="Go to 2nd onboarding page"
        onPress={() => navigation.navigate('OnboardingScreenSecond')}
      />
    </View>
  );
}
