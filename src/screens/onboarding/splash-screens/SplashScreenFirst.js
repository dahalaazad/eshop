import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function SplashScreenFirst({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}}>SplashScreenFirst</Text>
      
      <Button
        title="Go to 2nd splash screen page"
        onPress={() => navigation.navigate('SplashScreenSecond')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
