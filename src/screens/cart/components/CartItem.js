import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from '@app/screens/cart/components/CartItemStyles';
import CartItemImage from '@app/screens/cart/components/CartItemImage';
import BrakePadImage from '@app/assets/svg/BrakePad.svg';
import EngineFilterImage from '@app/assets/svg/EngineFilter.svg';
import HondaGearBox1Image from '@app/assets/svg/HondaGearBox1.svg';
import CrossImage from '@app/assets/svg/CrossImage.svg';
import {ProductCounter} from '@app/commons';

export default function CartItem({svgImage, titleText, subTitleText}) {
  console.log(titleText, subTitleText, 'in cartitem page');

  return (
    <View style={Styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={Styles.leftImageContainer}>
          <CartItemImage svgImage={svgImage} />
        </View>
        <View style={Styles.midTextContainer}>
          <Text style={Styles.titleText}>{titleText}</Text>
          <Text style={Styles.subTitleText}>{subTitleText}</Text>
          <Text style={Styles.priceText}>{`Rs. ${'1999'}`}</Text>
        </View>
      </View>

      <View style={Styles.rightButtonContainer}>
        <TouchableOpacity style={Styles.crossButton}>
          <CrossImage />
        </TouchableOpacity>

        <View style={Styles.counterButtonContainer}>
          <ProductCounter />
        </View>
      </View>
    </View>
  );
}
