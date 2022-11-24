import React from 'react';
import {Button} from 'react-native-paper';
import {Colors} from '../constants';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    width: 'auto',
  },
  labelStyles: {fontFamily: 'Poppins', fontSize: 18, fontWeight: '500'},
  contentStyles: {
    height: '100%',
  },
});

export default function PrimaryButton({
  buttonLabel,
  buttonHeight,
  onPressHandler,
  buttonWidth,
}) {
  return (
    <Button
      mode="contained"
      color={Colors.textLinkColor}
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
  );
}
