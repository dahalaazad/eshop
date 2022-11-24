import {View, Text,Button,StyleSheet} from 'react-native';
import React from 'react';

export default function ShoppingCart({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ShoppingCart</Text>
      <Button
        title="Go to My Cart Page"
        onPress={() => navigation.navigate('MyCart')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

