import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AD from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/constants';

export default function BackButton({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.backButton,styles.shadowProp]}
        onPress={() => alert('Back Button')}>
        <AD name="left" size={25} color={Colors.backButtonBlue} />
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
    shadowOffset: {width: -2, height: 8},
    shadowOpacity:0.12,
    shadowRadius: 3,
  },
  
});
