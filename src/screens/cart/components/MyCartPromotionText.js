import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import {MyCartPromotion} from '@app/assets/svg';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 40,
    borderRadius: 8,
    marginHorizontal: 20,
    shadowColor: Colors.dashboardProductCategoryActiveColor,
    elevation: 10,
  },
  imageContainer: {
    paddingBottom: 2,
  },
  adText: {
    color: Colors.checkoutPriceText,
    fontSize: 13,
    fontFamily: 'Poppins',
  },
});

export default function MyCartPromotionText() {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.imageContainer}>
        <MyCartPromotion />
      </View>
      <View>
        <Text style={Styles.adText}>
          Save Rs 324 compared to Authorised Services
        </Text>
      </View>
    </View>
  );
}
