import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {InputField, PrimaryButton} from '@app/commons';
import {Styles} from '@app/screens/login/LoginStyles';
import MainLogo from '@app/assets/svg/MainLogo.svg';

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
    navigation.navigate('MainStack');
  };

  return (
    <KeyboardAwareScrollView
      style={Styles.mainContainer}
      enableOnAndroid={false}
      keyboardShouldPersistTaps="handled">
      <View>
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
              <Text style={Styles.errorText}>
                Password pattern doesn't match
              </Text>
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
      </View>

      <View style={Styles.footerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignupPage');
            }}>
            <Text style={Styles.footerLinkText}>Join us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
