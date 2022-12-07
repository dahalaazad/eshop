import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: Colors.loginBackgroundColor,
    backgroundColor: Colors.whiteColor,
    borderRadius: 20,
    shadowColor: Colors.checkboxColor,
    elevation: 8,
    paddingLeft: 25,
    paddingTop: 25,
    paddingBottom: 10,
  },
  textContainer: {
    marginBottom: 15,
  },
  labelText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: Colors.checkoutPriceText,
    fontSize: 14,
    textAlign: 'left',
  },
  infoText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.blackColor,
    fontSize: 16,
    textAlign: 'left',
  },
});

export default function UserProfileInfoCard() {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Full Name</Text>
        <Text style={Styles.infoText}>Kurosaki Ichigo</Text>
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Phone Number</Text>
        <Text style={Styles.infoText}>9818181823</Text>
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Email Address</Text>
        <Text style={Styles.infoText}>random@email.com</Text>
      </View>

      <View style={Styles.textContainer}>
        <Text style={Styles.labelText}>Address</Text>
        <Text style={Styles.infoText}>Bhaktapur, Nepal</Text>
      </View>
    </View>
  );
}
