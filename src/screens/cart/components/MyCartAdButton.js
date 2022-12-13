import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';
import LinearGradient from 'react-native-linear-gradient';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.whiteColor,
    height: 34,
    width: 145,
    borderRadius: 27,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adText: {
    ...TextStyle.poppinsSmallBold,
    color: Colors.whiteColor,
  },
});

export default function MyCartAdButton() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#0074DD', '#A3CEF5']}
      style={Styles.mainContainer}>
      <TouchableOpacity>
        <Text style={Styles.adText}>DENTING & PAINTING</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
