import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '@app/constants';
import FilterButtonIcon from '@app/assets/svg/FilterButtonIcon.svg';

const Styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: Colors.textLinkColor,
    padding: 15,
    marginTop: 6,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default function FilterButton() {
  return (
    <TouchableOpacity
      style={Styles.buttonStyles}
      onPress={() => {
        console.log('first');
      }}>
      <FilterButtonIcon />
    </TouchableOpacity>
  );
}
