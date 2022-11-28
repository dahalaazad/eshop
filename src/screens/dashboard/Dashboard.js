import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {FilterButton, SearchBar} from '@app/commons';
import DashAdCarousel from '@app/screens/dashboard/components/DashAdCarousel';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/dashboard/DashboardStyles';
import CastrolImage from '@app/assets/svg/DashboardAdCastrol.svg';

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

      <ScrollView>
        <View style={Styles.adContainer}>
          <DashAdCarousel
            adTitle="CASTROL MAGNATEC"
            adSubTitle="Non-stop protection from every start"
            adImage={<CastrolImage />}
          />
        </View>
      </ScrollView>
    </View>
  );
}
