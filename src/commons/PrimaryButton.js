import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Colors, TextStyle} from '@app/constants';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const Styles = StyleSheet.create({
  buttonStyles: {
    width: 'auto',
  },
  labelStyles: TextStyle.poppinsExtraLargeNormal,
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
  buttonRadius,
  isOutlined,
}) {
  return (
    <Button
      mode={isOutlined ? 'outlined' : 'contained'}
      color={Colors.textLinkColor}
      uppercase={false}
      style={{
        ...Styles.buttonStyles,
        height: buttonHeight,
        width: buttonWidth,
        borderRadius: buttonRadius,
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
