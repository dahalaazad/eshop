import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Controller} from 'react-hook-form';
import {Colors, TextStyle} from '@app/constants';
import {StyleSheet, Text} from 'react-native';

export default function InputField({
  control,
  errors,
  rules,
  inputName,
  labelText,
  isPassword,
  passwordIcon,
  borderWidth,
  borderColor,
  outlineColor = 'transparent',
}) {
  const [hidePassword, setHidePassword] = useState(isPassword);
  const [eyeIcon, setEyeIcon] = useState(passwordIcon);

  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={inputName}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            theme={{roundness: 12}}
            mode="outlined"
            label={labelText}
            secureTextEntry={hidePassword}
            outlineColor={outlineColor}
            activeOutlineColor={Colors.textLinkColor}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            selectionColor={Colors.subtitleTextColor}
            right={
              passwordIcon && (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  icon={eyeIcon ? 'eye-off-outline' : 'eye'}
                  color={Colors.inputFieldIconColor}
                  onPress={() => {
                    setHidePassword(!hidePassword);
                    setEyeIcon(!eyeIcon);
                  }}
                />
              )
            }
            style={{backgroundColor: Colors.whiteColor}}
          />
        )}
      />

      {errors[inputName] && (
        <Text style={Styles.errorText}>{errors[inputName]?.message}</Text>
      )}
    </>
  );
}

const Styles = StyleSheet.create({
  errorText: {
    ...TextStyle.poppinsLargeLight,
    fontSize: 12,
    color: Colors.errorTextColor,
  },
});
