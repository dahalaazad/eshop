import {View, Text,StyleSheet,Button} from 'react-native';
import React from 'react';

export default function Shop({navigation}) {
  return (
    <View style={styles.container} >
      <Text style={{color:'#000',fontSize:25}}>Shop</Text>
      <Button
        title="Go to next page"
        onPress={() => navigation.navigate('ProductDetails')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

