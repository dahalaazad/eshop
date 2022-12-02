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

export default function OnboardingScreen({navigation}) {
  const [onboardScreenIndex, setOnboardScreenIndex] = useState(0);
  const screenValues = [
    {
      svgIcon: <Repairman1 viewBox="50 10 300 310" />,
      titleText: 'Solving all your motoworld problems',
      descriptionText: 'Use E-mistri to call for best service near you.',
    },
    {
      svgIcon: <Repairman2 viewBox="50 30 500 500" />,
      titleText: 'On your service within few taps',
      descriptionText: 'E-mistri is on your service within few taps.',
    },
    {
      svgIcon: <DeliveryGirl height="85%" />,
      titleText: 'Let’s get started with E-mistri',
      descriptionText:
        'Let us have a new moto servicing experience with E-mistri.',
    },
  ];

  const moveToNextScreen = () => {
    console.log(onboardScreenIndex);
    onboardScreenIndex < screenValues.length - 1
      ? setOnboardScreenIndex(onboardScreenIndex + 1)
      : navigation.navigate('LoginStack');
  };

  const moveToBackScreen = () => {
    setOnboardScreenIndex(onboardScreenIndex - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topHalfContainer}>
        <View style={styles.skipButtonLayout}>
          <View>
            {onboardScreenIndex > 0 ? (
              <TouchableOpacity onPress={moveToBackScreen} style={{zIndex: 1}}>
                <SimpleLineIcons
                  name="arrow-left-circle"
                  color={Colors.whiteColor}
                  size={45}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled={true}>
                <SimpleLineIcons
                  name="arrow-left-circle"
                  color={Colors.backButtonBlueColor}
                  size={45}
                />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View
        // style={{flex: 1}}
        >
          {screenValues[onboardScreenIndex].svgIcon}
        </View>
      </View>

      <View style={[styles.bottomHalfContainer, styles.centerStyle]}>
        <Text style={[styles.commonTextStyle, styles.titleText]}>
          {screenValues[onboardScreenIndex].titleText}
        </Text>

        <Text style={[styles.commonTextStyle, styles.descriptionText]}>
          {screenValues[onboardScreenIndex].descriptionText}
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
    marginBottom:-20,
    paddingHorizontal: 20,
    zIndex: 1,
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
    paddingBottom: 40,
  },
});
