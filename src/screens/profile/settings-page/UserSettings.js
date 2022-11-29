import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton} from '@app/commons';

export default function UserSettings({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={{color: '#000', fontSize: 25}}>UserSettings</Text>
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
