import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import {CountryIconFrance, LanguageOptionCheck} from '@app/assets/svg';

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
}) {
  return (
    <View style={Styles.mainContainer}>
      <View>
        {isSelected ? languageSelectedIcon : <View style={{width: 20}} />}
      </View>

      <View>
        <Text style={Styles.languageText}>{countryName}</Text>
      </View>

      <View>{countryFlag}</View>
    </View>
  );
}
