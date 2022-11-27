import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 25}}>ProductDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
