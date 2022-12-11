import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

const Styles = StyleSheet.create({
  mainContainer: {
    height: 66,
    borderWidth: 1,
    borderColor: Colors.languageOptionsBorderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  languageText: {
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: '400',
    color: Colors.blackColor,
  },
});

export default function ProfileLanguageOption({
  languageSelectedIcon,
  countryName,
  countryFlag,
  isSelected,
  toggleStatus,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.5}
      onPress={toggleStatus}>
      <View>
        {isSelected ? languageSelectedIcon : <View style={{width: 20}} />}
      </View>

      <View>
        <Text style={Styles.languageText}>{countryName}</Text>
      </View>

      <View>{countryFlag}</View>
    </TouchableOpacity>
  );
}
