import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function UserAccount({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}}>UserAccount</Text>
      <Button
        title="Go to next page"
        onPress={() => navigation.navigate('UserProfile')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

