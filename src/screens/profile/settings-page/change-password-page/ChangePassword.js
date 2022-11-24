import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default function ChangePassword({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}} >ChangePassword</Text>
      <Button
        title="Go to next page"
        onPress={() => navigation.navigate('EditProfile')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
