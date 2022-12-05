import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors} from '@app/constants';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const Styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonIconName,
  buttonIconSize,
  buttonIconColor,
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
      icon={({size, color}) => (
        <MCI
          name={buttonIconName}
          size={buttonIconSize}
          color={buttonIconColor}
        />
      )}
      onPress={() => {
        onPressHandler();
      }}>
      {buttonLabel}
    </Button>
  );
}
