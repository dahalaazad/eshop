import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors, TextStyle} from '@app/constants';
import {HondaGearBoxImage1} from '@app/assets/svg';

export default function ProductCard({
  product,
  onPressHandler,
  titleTextFontWeight,
}) {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={0.6}
      onPress={() => onPressHandler(product)}>
      <View style={styles.imageContainer}>
        {product?.imagePath !== '' ? (
          <Image
            source={{
              uri: product?.imagePath,
            }}
            style={styles.productImage}
          />
        ) : (
          <HondaGearBoxImage1 />
        )}
      </View>

      <View style={styles.textContainer}>
        <Text
          style={{...styles.titleText, fontWeight: titleTextFontWeight}}
          numberOfLines={1}>
          {product?.name || 'Product Name'}
        </Text>

        <Text style={styles.subTitleText} numberOfLines={1}>
          {product?.description || 'Product Description'}
        </Text>

        <Text style={styles.priceText}>
          {`Rs. ${product?.price}` || 'Price'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    width: '45%',
    borderRadius: 18,
    height: 250,
    marginBottom: 30,
    shadowColor: Colors.checkboxColor,
    elevation: 8,
    // overflow: 'hidden',
  },
  imageContainer: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
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
  productImage: {
    height: '100%',
    width: '100%',
    borderRadius: 28,
  },
});
