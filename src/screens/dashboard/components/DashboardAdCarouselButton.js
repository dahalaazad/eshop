import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors} from '@app/constants';
import LinearGradient from 'react-native-linear-gradient';

const Styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    width: 'auto',
  },
  labelStyles: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    color: Colors.whiteColor,
  },
  contentStyles: {
    height: '100%',
  },
  gradientContainer: {
    width: 120,
    borderRadius: 10,
  },
});

export default function DashAdCarouselButton({
  buttonLabel,
  buttonHeight,
  onPressHandler,
  buttonWidth,
}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#E7973C', '#00117A']}
      style={Styles.gradientContainer}>
      <View>
        <Button
          mode="outlined"
          color="transparent"
          uppercase={false}
          style={{
            ...Styles.buttonStyles,
            height: buttonHeight,
            width: buttonWidth,
          }}
          labelStyle={Styles.labelStyles}
          contentStyle={Styles.contentStyles}
          onPress={() => {
            onPressHandler();
          }}>
          {buttonLabel}
        </Button>
      </View>
    </LinearGradient>
  );
}
