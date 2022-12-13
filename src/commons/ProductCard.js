import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, TextStyle} from '@app/constants';

export default function ProductCard({
  product,
  onPressHandler,
  titleTextFontWeight,
}) {
  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      activeOpacity={0.6}
      onPress={() => onPressHandler(product)}>
      <View style={Styles.imageContainer}>{product.productCardImage}</View>

      <View style={Styles.textContainer}>
        <Text style={{...Styles.titleText, fontWeight: titleTextFontWeight}}>
          {product.productCardTitle}
        </Text>

        <Text style={Styles.subTitleText}>{product.productCardSubTitle}</Text>

        <Text
          style={Styles.priceText}>{`Rs. ${product.productCardPrice}`}</Text>
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
  titleText: {...TextStyle.poppinsRegularNormal, color: Colors.blackColor},
  subTitleText: {
    ...TextStyle.poppinsRegularLight,
    color: Colors.productCardSubtitleColor,
  },
  priceText: {
    fontFamily: 'Poppins',
    color: Colors.productCardPriceColor,
    fontWeight: '400',
    fontSize: 14,
  },
});
