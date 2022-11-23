import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React from 'react';
import InputField from '../../../commons/InputField';
import {StyleSheet} from 'react-native';
import MainLogo from '../../../assets/svg/MainLogo.svg';
import {Colors} from '../../../constants';
import PrimaryButton from '../../../commons/PrimaryButton';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.loginBackgroundColor,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputFieldContainer: {
    width: '100%',
    paddingBottom: 5,
  },
  headingText: {
    color: Colors.blackColor,
    fontFamily: 'Lexend',
    fontWeight: '700',
    fontSize: 26,
  },
  subtitleText: {
    color: Colors.subtitleTextColor,
    fontFamily: 'Poppins',
    fontWeight: '400',
    paddingTop: 6,
    fontSize: 16,
  },
  footerText: {
    color: Colors.footerTextColor,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  footerLinkText: {
    color: Colors.textLinkColor,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  forgotPasswordLink: {
    fontFamily: 'Poppins',
    color: Colors.textLinkColor,
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 15,
  },
  loginButtonContainer: {},
});

export default function Login() {
  const loginButtonHandler = () => {
    console.log('Login Pressed');
  };

  return (
    <KeyboardAvoidingView style={Styles.mainContainer}>
      <View style={{alignItems: 'center'}}>
        <View style={{paddingTop: 65, paddingBottom: 52}}>
          <MainLogo />
        </View>

        <Text style={Styles.headingText}>Welcome Back</Text>

        <Text style={Styles.subtitleText}>
          There are many variations of passages
        </Text>
      </View>

      <View style={{paddingBottom: 45, paddingTop: 40}}>
        <View style={{paddingBottom: 25}}>
          <InputField labelText="Email/Mobile Number" isPassword={false} />
        </View>

        <InputField
          labelText="Password"
          isPassword={true}
          passwordIcon={true}
        />

        <TouchableOpacity onPress={() => {}} style={{paddingTop: 18}}>
          <Text style={Styles.forgotPasswordLink}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={{paddingTop: 45}}>
          <PrimaryButton
            buttonLabel="Login"
            buttonHeight={60}
            onPressHandler={loginButtonHandler}
          />
        </View>
      </View>

      <View style={Styles.footerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={Styles.footerLinkText}>Join us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
