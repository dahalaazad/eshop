import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function UserSettings({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000',fontSize:25}}>UserSettings</Text>
      <Button
        title="Go to next page"
        onPress={() => navigation.navigate('ChangePassword')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

