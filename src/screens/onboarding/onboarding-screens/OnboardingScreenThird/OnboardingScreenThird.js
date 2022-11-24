import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function OnboardingScreenThird({navigation}) {
  return (
    <View style={styles.container} >
      <Text>OnboardingScreenThird</Text>
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate('LoginStack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

