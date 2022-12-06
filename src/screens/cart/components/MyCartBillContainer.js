import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.whiteColor,
    // flex: 1,
    height: 90,
    borderRadius: 16,
    shadowColor: Colors.dashboardProductCategoryActiveColor,
    elevation: 10,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
  },
  botContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOne: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.productCardSubtitleColor,
  },
  textTwo: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.blackColor,
  },
  headingText: {
    color: Colors.blackColor,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
});

export default function MyCartBillContainer() {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.headingText}>Bill Details</Text>
      <View style={Styles.botContainer}>
        <View>
          <Text style={Styles.textOne}>Item Total</Text>
          <Text style={Styles.textTwo}>Total Price</Text>
        </View>

        <View>
          <Text style={Styles.textOne}>3</Text>
          <Text style={Styles.textTwo}>Rs 1999</Text>
        </View>
      </View>
    </View>
  );
}
