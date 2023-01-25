import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, TextStyle} from '@app/constants';
import AD from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import {onboardingValues} from './onboardingValues';
import {useDispatch} from 'react-redux';
import {setFirstLoad} from '@app/redux/slices/auth/authSlice';

export default function OnboardingScreenTwo({navigation}) {
  const dispatch = useDispatch();

  const navigateToSignupPage = () => {
    dispatch(setFirstLoad(false));
    navigation.navigate('SignupPage');
  };

  const moveToNextScreen = () => {};

  const moveToBackScreen = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.topHalfContainer}>
        <View style={styles.skipButtonLayout}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('OnboardingScreenTwo')}
              style={{zIndex: 1}}>
              <SimpleLineIcons
                name="arrow-left-circle"
                color={Colors.whiteColor}
                size={45}
              />
            </TouchableOpacity>
            <TouchableOpacity disabled={true}>
              <SimpleLineIcons
                name="arrow-left-circle"
                color={Colors.backButtonBlueColor}
                size={45}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View>{onboardingValues[2].svgIcon}</View>
      </View>

      <View style={[styles.bottomHalfContainer, styles.centerStyle]}>
        <Text style={[styles.commonTextStyle, styles.titleText]}>
          {onboardingValues[2].titleText}
        </Text>

        <Text style={[styles.commonTextStyle, styles.descriptionText]}>
          {onboardingValues[2].descriptionText}
        </Text>

        <LinearGradient
          useAngle={true}
          angle={29.15}
          locations={[0.33, 1.52, 1.52]}
          colors={[
            'rgba(33, 46, 126, 0.91)',
            'rgba(33, 46, 126, 0)',
            'rgba(33, 46, 126, 0)',
          ]}
          style={{borderRadius: 50}}>
          <TouchableOpacity
            style={styles.nextButtonStyle}
            onPress={moveToNextScreen}>
            <AD name="right" size={20} color={Colors.whiteColor} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHalfContainer: {
    flex: 1,
    backgroundColor: Colors.backButtonBlueColor,
  },
  skipButtonLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: -20,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  skipButtonText: {
    ...TextStyle.robotoLargeNormal,
    color: Colors.whiteColor,
  },
  bottomHalfContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.whiteColor,
    color: Colors.blackColor,
  },
  commonTextStyle: {
    color: Colors.blackColor,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  nextButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  titleText: {
    ...TextStyle.poppinsExtraLargerNormal,
    padding: 10,
  },
  descriptionText: {
    ...TextStyle.poppinsLargeLight,
    paddingHorizontal: 55,
    paddingBottom: 40,
  },
});
