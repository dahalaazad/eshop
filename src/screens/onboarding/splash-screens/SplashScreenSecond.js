import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function SplashScreenSecond({navigation}) {
  return (
    <View style={styles.container} >
      <Text style={{color:'#000',fontSize:25}}>SplashScreenSecond</Text>
      
      <Button
        title="Go to 1st onboarding page"
        onPress={() => navigation.navigate('OnboardingScreenFirst')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

