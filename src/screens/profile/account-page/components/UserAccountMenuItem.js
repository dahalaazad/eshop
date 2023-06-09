import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    // paddingRight: 15,
  },
  textContainer: {
    paddingLeft: 15,
  },
  settingText: {
    ...TextStyle.poppinsLargeNormal,
    color: Colors.blackColor,
  },
  subText: {
    ...TextStyle.poppinsSmallLight,
    color: Colors.checkoutPriceText,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.itemMenuIconBackgroundColor,
    padding: 15,
    borderRadius: 8,
    height: 46,
    width: 46,
  },
});

export default function UserAccountMenuItem({
  menuText,
  menuLeft,
  menuRight,
  menuSubText,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={Styles.leftContainer}>
        <View style={Styles.imageContainer}>{menuLeft}</View>

        <View style={Styles.textContainer}>
          <Text style={Styles.settingText}>{menuText}</Text>
          <Text style={Styles.subText}>{menuSubText}</Text>
        </View>
      </View>

      <View style={Styles.rightContainer}>{menuRight}</View>
    </TouchableOpacity>
  );
}
