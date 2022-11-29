import {View, Text, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton} from '@app/commons';

export default function EditProfile({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 30}}>EditProfile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
