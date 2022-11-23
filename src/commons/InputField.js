import React from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '../constants/';

export default function InputField({labelText, isPassword, passwordIcon}) {
  return (
    <TextInput
      mode="outlined"
      label={labelText}
      secureTextEntry={isPassword}
      outlineColor="transparent"
      activeOutlineColor={Colors.textLinkColor}
      right={
        passwordIcon && (
          <TextInput.Icon
            icon="eye-off-outline"
            color={Colors.inputFieldIconColor}
          />
        )
      }
    />
  );
}
