import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '@app/constants';

export default function ProductCard({
  productId,
  productCardImage,
  productCardTitle,
  productCardSubTitle,
  productCardPrice,
  onPressHandler,
  titleTextFontWeight,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.6}
      onPress={() => {
        onPressHandler(productId);
      }}>
      <View style={Styles.imageContainer}>{productCardImage}</View>
      <View style={Styles.textContainer}>
        <Text style={{...Styles.titleText, fontWeight: titleTextFontWeight}}>
          {productCardTitle}
        </Text>
        <Text style={Styles.subTitleText}>{productCardSubTitle}</Text>
        <Text style={Styles.priceText}>{`Rs. ${productCardPrice}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    width: '45%',
    borderRadius: 18,
    height: 250,
    marginBottom: 30,
    shadowColor: Colors.checkboxColor,
    elevation: 8,
  },
  imageContainer: {
    height: 150,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  titleText: {
    fontFamily: 'Poppins',
    color: Colors.blackColor,
    fontWeight: '500',
    fontSize: 14,
  },
  subTitleText: {
    fontFamily: 'Poppins',
    color: Colors.productCardSubtitleColor,
    fontWeight: '400',
    fontSize: 14,
  },
  priceText: {
    fontFamily: 'Poppins',
    color: Colors.productCardPriceColor,
    fontWeight: '400',
    fontSize: 14,
  },
});
