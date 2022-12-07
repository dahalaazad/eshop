import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from '@app/screens/cart/components/CartItemStyles';
import CartItemImage from '@app/screens/cart/components/CartItemImage';
import CrossImage from '@app/assets/svg/CrossImage.svg';
import {ProductCounter} from '@app/commons';

export default function CartItem({
  svgImage,
  titleText,
  subTitleText,
  itemPrice,
  itemDiscountedPrice,
}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={Styles.leftImageContainer}>
          <CartItemImage svgImage={svgImage} />
        </View>

        <View style={Styles.midTextContainer}>
          <Text style={Styles.titleText}>{titleText}</Text>

          <Text style={Styles.subTitleText}>{subTitleText}</Text>

          <View style={Styles.priceContainer}>
            <View>
              <Text style={Styles.priceText}>
                {itemDiscountedPrice
                  ? `Rs. ${itemDiscountedPrice}`
                  : `Rs. ${itemPrice}`}
              </Text>
            </View>

            {itemDiscountedPrice && (
              <View style={Styles.discountedItemPriceContainer}>
                <Text style={Styles.discountedPriceText}>
                  {`Rs. ${itemPrice}`}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.rightButtonContainer}>
        <TouchableOpacity style={Styles.crossButton}>
          <CrossImage />
        </TouchableOpacity>

        {!itemDiscountedPrice && (
          <View style={Styles.counterButtonContainer}>
            <ProductCounter />
          </View>
        )}
      </View>
    </View>
  );
}
