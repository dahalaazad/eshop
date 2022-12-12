import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, InputField, PrimaryButton} from '@app/commons';
import {Colors} from '@app/constants';

export default function ChangePassword({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topTextContainer}>
          <Text style={styles.textStyle}>Current Password</Text>

          <Text style={styles.blueTextStyle}>Forgot Password?</Text>
        </View>

        <View>
          <InputField
            labelText="Password"
            isPassword={true}
            passwordIcon={true}
            borderWidth={1.5}
            borderColor={Colors.changePasswordInputBorderColor}
          />
        </View>
      </View>

      <View style={{paddingVertical: 15}}>
        <Text style={styles.textStyle}>New Password</Text>

        <InputField
          labelText="Password"
          isPassword={true}
          passwordIcon={true}
          borderWidth={1.5}
          borderColor={Colors.changePasswordInputBorderColor}
        />
      </View>

      <View style={{paddingVertical: 10}}>
        <Text style={styles.textStyle}>Confirm Password</Text>

        <InputField
          labelText="Password"
          isPassword={true}
          passwordIcon={true}
          borderWidth={1.5}
          borderColor={Colors.changePasswordInputBorderColor}
        />
      </View>

      <View style={{marginVertical: 100, paddingHorizontal: 10}}>
        <PrimaryButton
          buttonLabel="Save Changes"
          buttonRadius={35}
          buttonHeight={65}
          onPressHandler={() => alert('Changes saved')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 25,
    backgroundColor: Colors.whiteColor,
  },
  topTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  textStyle: {
    color: Colors.changePasswordTextColor,
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  blueTextStyle: {
    color: Colors.changePasswordBlueColor,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});
