import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AD from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/constants';

export default function BackButton({onBackPress}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.backButton, styles.shadowProp]}
        onPress={onBackPress}>
        <AD name="left" size={25} color={Colors.backButtonBlueColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 8,
    padding: 12,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
  },
});
