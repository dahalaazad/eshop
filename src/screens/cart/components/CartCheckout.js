import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';
import {PrimaryButton} from '@app/commons';
import {useNavigation} from '@react-navigation/native';

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.whiteColor,
    height: 90,
    // marginTop: 5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 5,
    shadowColor: Colors.checkboxColor,
    elevation: 8,
  },
  text: {
    color: Colors.checkoutPriceText,
    ...TextStyle.poppinsExtraLargeLight,
  },
  price: {
    color: Colors.blackColor,
    ...TextStyle.poppinsExtraLargeNormal,
  },
});

export default function CartCheckout() {
  const navigation = useNavigation();

  const checkoutButtonHandler = () => {
    navigation.navigate('MyCart');
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.text}>Total</Text>

        <Text style={Styles.price}>Rs. 2,999</Text>
      </View>

      <View style={Styles.rightContainer}>
        <PrimaryButton
          buttonLabel="Checkout"
          buttonRadius={5}
          buttonHeight={51}
          buttonWidth={200}
          onPressHandler={checkoutButtonHandler}
        />
      </View>
    </View>
  );
}
