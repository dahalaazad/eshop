import {View, Text, Button,StyleSheet} from 'react-native';
import React from 'react';

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container} >
      <Text>Dashboard</Text>
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
