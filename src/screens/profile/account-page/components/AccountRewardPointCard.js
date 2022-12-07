import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import {AccountRibbon} from '@app/assets/svg';

export const Styles = StyleSheet.create({
  mainContainer: {
    height: 66,
    width: 191,
    backgroundColor: Colors.whiteColor,
    borderRadius: 13,
    shadowColor: Colors.checkboxColor,
    elevation: 10,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pointText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.blackColor,
  },
  rewardText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.checkoutPriceText,
  },
});

export default function AccountRewardPointCard() {
  return (
    <View style={Styles.mainContainer}>
      <View>
        <AccountRibbon />
      </View>
      <View>
        <Text style={Styles.pointText}>38.57</Text>
        <Text style={Styles.rewardText}>Reward Points</Text>
      </View>
    </View>
  );
}
