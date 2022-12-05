import {View, Text} from 'react-native';
import React from 'react';
import {Styles} from '@app/screens/cart/components/CartItemImageStyles';

export default function CartItemImage({svgImage}) {
  return <View style={Styles.mainContainer}>{svgImage}</View>;
}
