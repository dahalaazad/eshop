import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Colors, TextStyle} from '@app/constants';
import LinearGradient from 'react-native-linear-gradient';

const Styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    width: 'auto',
  },
  labelStyles: {
    ...TextStyle.poppinsLargeNormal,
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
