import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '@app/constants';
import FE from 'react-native-vector-icons/Feather';

const Styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: Colors.textLinkColor,
    padding: 15,
    marginTop: 6,
    borderRadius: 10,
  },
});

export default function FilterButton() {
  return (
    <TouchableOpacity
      style={Styles.buttonStyles}
      onPress={() => {
        console.log('first');
      }}>
      <FE name="sliders" size={25} color={Colors.whiteColor} />
    </TouchableOpacity>
  );
}
