import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>LoginPage</Text>
      <Button
        title="Go to Signup Page"
        onPress={() => navigation.navigate('SignupPage')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
