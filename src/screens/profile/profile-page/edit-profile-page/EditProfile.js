import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:30}} >EditProfile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1,},
});
