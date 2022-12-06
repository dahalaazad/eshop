import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import LinearGradient from 'react-native-linear-gradient';
import {MyCartAdButton} from '@app/screens/cart/components';
import {MyCartAdMainImage} from '@app/assets/svg';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.myCartAdBackgroundColor,
    height: 180,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  topContainer: {
    height: 121,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 26,
  },
  gradientContainer: {
    height: 121,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 26,
    position: 'relative',
    paddingTop: 15,
    paddingLeft: 20,
  },
  adTextOne: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    color: Colors.myCartAdTextOne,
  },
  adTextOneContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  adTextTwo: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 30,
    color: Colors.whiteColor,
  },
  adTextTwoContainer: {
    position: 'absolute',
    top: 22,
    left: 20,
  },
  adTextThree: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    color: Colors.whiteColor,
  },
  adTextThreeContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  adTextFour: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.whiteColor,
  },
  adTextFourContainer: {
    position: 'absolute',
    top: 90,
    left: 20,
  },
  botContainer: {
    paddingTop: 12,
    paddingLeft: 12,
  },
  adMainImageContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
  },
});

export default function MyCartAdComponent() {
  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0074DD', '#A3CEF5']}
        style={Styles.gradientContainer}>
        <View style={Styles.adTextOneContainer}>
          <Text style={Styles.adTextOne}>UPTO</Text>
        </View>

        <View style={Styles.adTextTwoContainer}>
          <Text style={Styles.adTextTwo}>Rs. 300 OFF</Text>
        </View>

        <View style={Styles.adTextThreeContainer}>
          <Text style={Styles.adTextThree}>PER PANEL</Text>
        </View>

        <View style={Styles.adTextFourContainer}>
          <Text style={Styles.adTextFour}>2 Year Warranty on Paint</Text>
        </View>
      </LinearGradient>

      <MyCartAdMainImage
        style={{
          position: 'absolute',
          bottom: 20,
          right: 0,
        }}
      />

      <View style={Styles.botContainer}>
        <MyCartAdButton />
      </View>
    </View>
  );
}
