import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}}>LoginPage</Text>
      <Button
        title="You are Logged In"
        onPress={() => navigation.navigate('MainStack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
