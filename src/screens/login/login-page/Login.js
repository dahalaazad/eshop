import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React from 'react';
import InputField from '../../../commons/InputField';
import {StyleSheet} from 'react-native';
import MainLogo from '../../../assets/svg/MainLogo.svg';
import {Colors} from '../../../constants';
import PrimaryButton from '../../../commons/PrimaryButton';
import {useForm, Controller} from 'react-hook-form';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.whiteColor,
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
  loginButtonContainer: {
    paddingTop: 45,
  },
  errorText: {
    paddingLeft: 16,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: Colors.errorTextColor,
  },
});

export default function Login({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginButtonHandler = loginData => {
    console.log('Login Pressed', loginData);
    navigation.navigate('MainStack');
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
        <View style={{paddingBottom: 10}}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                labelText="Email Address"
                isPassword={false}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your email</Text>
          ) : errors.email?.type === 'pattern' ? (
            <Text style={Styles.errorText}>Enter a valid email address</Text>
          ) : null}
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 8,
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                labelText="Password"
                isPassword={true}
                passwordIcon={true}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your password</Text>
          ) : errors.password?.type === 'pattern' ? (
            <Text style={Styles.errorText}>Password pattern doesn't match</Text>
          ) : errors.password?.type === 'minLength' ? (
            <Text style={Styles.errorText}>Too short</Text>
          ) : null}
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.forgotPasswordLink}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={Styles.loginButtonContainer}>
          <PrimaryButton
            buttonLabel="Login"
            buttonHeight={60}
            onPressHandler={handleSubmit(loginButtonHandler)}
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
