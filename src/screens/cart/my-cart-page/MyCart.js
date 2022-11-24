import {View, Text,StyleSheet} from 'react-native';
import React from 'react';

export default function MyCart() {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}}>MyCart Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

