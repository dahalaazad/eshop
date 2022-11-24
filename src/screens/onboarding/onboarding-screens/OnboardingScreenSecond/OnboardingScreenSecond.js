import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function OnboardingScreenSecond({navigation}) {
  return (
    <View style={styles.container} >
      <Text style={{color:'#000',fontSize:25}}>OnboardingScreenSecond</Text>
      <Button
        title="Go to 3rd onboarding page"
        onPress={() => navigation.navigate('OnboardingScreenThird')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

