import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from '@app/styles/UserSettingMenuItemStyles';

export default function UserSettingMenuItem({
  menuText,
  menuLeft,
  menuRight,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={Styles.leftContainer}>
        <View style={Styles.leftImageContainer}>{menuLeft}</View>

        <View style={Styles.textContainer}>
          <Text style={Styles.settingText}>{menuText}</Text>
        </View>
      </View>

      <View style={Styles.rightContainer}>{menuRight}</View>
    </TouchableOpacity>
  );
}
