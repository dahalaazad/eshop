import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '@app/constants';
import AD from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Repairman1, Repairman2, DeliveryGirl} from '@app/assets/svg';

export default function OnboardingScreenFirst({navigation}) {
  const [onboardScreenIndex, setOnboardScreenIndex] = useState(0);
  const screenValues = [
    {
      svgIcon: <Repairman1 />,
      text: 'Solving all your motoworld problems',
    },
    {
      svgIcon: <Repairman2 height="100%" width="100%" />,
      text: 'On your service within few taps',
    },
    {
      svgIcon: <DeliveryGirl />,
      text: 'Let’s get started with E-mistri',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topHalfContainer}>
        <View style={styles.skipButtonLayout}>
          <TouchableOpacity
            onPress={() => setOnboardScreenIndex(onboardScreenIndex - 1)}>
            {onboardScreenIndex > 0 ? (
              <SimpleLineIcons
                name="arrow-left-circle"
                color={Colors.whiteColor}
                size={45}
              />
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View>{screenValues[onboardScreenIndex].svgIcon}</View>
      </View>

      <View style={[styles.bottomHalfContainer, styles.centerStyle]}>
        <Text style={[styles.commonTextStyle, styles.titleText]}>
          {screenValues[onboardScreenIndex].text}
        </Text>

        <Text style={[styles.commonTextStyle, styles.descriptionText]}>
          Use E-mistri to call for best service near you
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
            onPress={() => {
              onboardScreenIndex < screenValues.length - 1
                ? setOnboardScreenIndex(onboardScreenIndex + 1)
                : navigation.navigate('LoginStack');
            }}>
            <AD name="right" size={35} color={Colors.whiteColor} />
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
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '500',
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
    fontSize: 32,
    fontWeight: '500',
    padding: 10,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 55,
    paddingVertical: 10,
  },
});
