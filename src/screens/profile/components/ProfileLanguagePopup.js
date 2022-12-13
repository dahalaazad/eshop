import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Colors, TextStyle} from '@app/constants';
import ProfileLanguageOption from './ProfileLanguageOption';
import {CountryIconFrance, LanguageOptionCheck} from '@app/assets/svg';

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.whiteColor,
    height: 233,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  mainText: {
    ...TextStyle.poppinsExtraLargerNormal,
    color: Colors.blackColor,
    textAlign: 'center',
  },
  countryListContainer: {
    marginTop: 10,
  },
});

export default function ProfileLanguagePopup() {
  const [languageData, setLanguageData] = useState(languageOptionData);

  const toggleStatusHandler = countryName => {
    setLanguageData(
      languageData.map(item =>
        item.countryName === countryName
          ? {...item, isSelected: !item.isSelected}
          : {...item, isSelected: false},
      ),
    );
  };

  const languageOptionRender = ({item}) => (
    <ProfileLanguageOption
      languageSelectedIcon={item.selectedLanguageIcon}
      countryName={item.countryName}
      countryFlag={item.countryFlag}
      isSelected={item.isSelected}
      toggleStatus={() => {
        toggleStatusHandler(item.countryName);
      }}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.mainText}>Select Language</Text>

      <View style={Styles.countryListContainer}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          // contentContainerStyle={{paddingTop: 50, paddingBottom: 50}}
          data={languageData}
          keyExtractor={data => data.countryName}
          renderItem={languageOptionRender}
        />
      </View>
    </View>
  );
}

const languageOptionData = [
  {
    countryName: 'English',
    countryFlag: <CountryIconFrance />,
    selectedLanguageIcon: <LanguageOptionCheck />,
    isSelected: false,
  },
  {
    countryName: 'France',
    countryFlag: <CountryIconFrance />,
    selectedLanguageIcon: <LanguageOptionCheck />,
    isSelected: true,
  },
];
