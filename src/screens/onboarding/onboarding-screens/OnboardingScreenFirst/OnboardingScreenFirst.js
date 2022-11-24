import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function OnboardingScreenFirst({navigation}) {
  return (
    <View style={styles.container} >
      <Text style={{color:'#000',fontSize:25}} >OnboardingScreenFirst</Text>
      <Button
        title="Go to 2nd onboarding page"
        onPress={() => navigation.navigate('OnboardingScreenSecond')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

