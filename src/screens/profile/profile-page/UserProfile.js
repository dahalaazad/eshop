import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}}>UserProfile</Text>
      <Button
        title="Go to next page"
        onPress={() => navigation.navigate('UserSettings')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

