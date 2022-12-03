import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import MinusIcon from '@app/assets/svg/CounterMinusIcon.svg';
import PlusIcon from '@app/assets/svg/CounterPlusIcon.svg';

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 35,
    width: 95,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: Colors.dashboardProductCategoryColor,
  },
  counterTextContainer: {
    paddingTop: 3,
  },
  counterText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textLinkColor,
  },
});

export default function ProductCounter() {
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.5}>
        <MinusIcon />
      </TouchableOpacity>

      <View style={Styles.counterTextContainer}>
        <Text style={Styles.counterText}>2</Text>
      </View>

      <TouchableOpacity activeOpacity={0.5}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
}
