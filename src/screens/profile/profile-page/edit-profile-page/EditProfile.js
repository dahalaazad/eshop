import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton} from '@app/commons';
import {Colors} from '@app/constants';
import Images from '@app/constants/Images';
import {useHeaderHeight} from '@react-navigation/elements';

export default function EditProfile({navigation}) {
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);
  return (
    <View style={[styles.container,{marginTop:headerHeight}]}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.profileManImage}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  imageContainer: {
    height: 122,
    width: 122,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 80,
    // alignSelf: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
