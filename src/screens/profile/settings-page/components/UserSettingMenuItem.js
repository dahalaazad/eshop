import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './UserSettingMenuItemStyles';

export default function UserSettingMenuItem({
  menuText,
  menuLeft,
  menuRight,
  toggleModal,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.5}
      onPress={toggleModal}>
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
