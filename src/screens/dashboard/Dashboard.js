import {View, Text, Button} from 'react-native';
import React from 'react';
import {FilterButton, SearchBar} from '@app/commons';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/dashboard/DashboardStyles';

export default function Dashboard({navigation}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topBarContainer}>
        <SearchBar
          labelText={'Search for products'}
          outlineColor={Colors.searchBarColor}
        />
        <FilterButton />
      </View>
    </View>
  );
}
