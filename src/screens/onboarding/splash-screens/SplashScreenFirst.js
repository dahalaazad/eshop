import {View, Text, Button} from 'react-native';
import React from 'react';

export default function SplashScreenFirst({navigation}) {
  return (
    <View>
      <Text>SplashScreenFirst</Text>
      <Button
        title="Go to 2nd splash screen page"
        onPress={() => navigation.navigate('SplashScreenSecond')}
      />
    </View>
  );
}
