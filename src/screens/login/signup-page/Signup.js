import {View, Text,Button,StyleSheet} from 'react-native';
import React from 'react';

export default function Signup({navigation}) {
  return (
    <View style={styles.container} >
      <Text style={{color: '#000'}}>Signup</Text>
      <Button
        title="It ends here for now"
        // onPress={() => navigation.navigate('MainStack')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
