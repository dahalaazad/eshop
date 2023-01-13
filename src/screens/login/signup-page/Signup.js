import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from 'react-native-paper';
import {Colors} from '@app/constants';
import {PrimaryButton, InputField} from '@app/commons';
import {Styles} from '@app/screens/login/LoginStyles';
import {MainLogoColor} from '@app/assets/svg';

export default function Signup({navigation}) {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [checked, setChecked] = useState(false);

  const signupButtonHandler = signupData => {
    navigation.navigate('LoginPage');
  };

  return (
    <KeyboardAwareScrollView
      style={Styles.mainContainer}
      enableOnAndroid={false}
      keyboardShouldPersistTaps="handled">
      <View>
        <View style={{alignItems: 'center'}}>
          <View style={{paddingTop: 45, paddingBottom: 32}}>
            <MainLogoColor />
          </View>

          <Text style={Styles.headingText}>Create a New Account</Text>

          <Text style={Styles.subtitleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </View>

        <View style={{paddingTop: 20}}>
          <View style={{paddingBottom: 5}}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Provide an email address',
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid email address',
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

            {errors && (
              <Text style={Styles.errorText}>{errors?.email?.message}</Text>
            )}
          </View>

          <View style={{paddingBottom: 5}}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter your full name',
                },
                minLength: {
                  value: 6,
                  message: 'Minium 6 characters',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <InputField
                  labelText="Full Name"
                  isPassword={false}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="fullName"
            />
            {errors && (
              <Text style={Styles.errorText}>{errors?.fullName?.message}</Text>
            )}
          </View>

          <View style={{paddingBottom: 5}}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Enter a password',
                },
                minLength: {
                  value: 8,
                  message: 'Minimum 8 characters',
                },
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message: 'Password pattern is incorrect',
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
            {errors && (
              <Text style={Styles.errorText}>{errors?.password?.message}</Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <InputField
                  labelText="Confirm Password"
                  isPassword={true}
                  passwordIcon={true}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: 'Confirm your password',
                },
                validate: value => {
                  if (value !== watch('password')) {
                    return 'Password does not match';
                  }
                },
              }}
              name="confirmPassword"
            />
            {errors && (
              <Text style={Styles.errorText}>
                {errors?.confirmPassword?.message}
              </Text>
            )}
          </View>
        </View>

        <View style={Styles.privacyPolicyContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            uncheckedColor={Colors.checkboxColor}
            color={Colors.textLinkColor}
          />
          <View>
            <Text style={{...Styles.policyText}}>
              I agree with the{' '}
              <Text style={Styles.policyLinkText} onPress={() => {}}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text
                style={Styles.policyLinkText}
                accessible={true}
                onPress={() => {}}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
        </View>

        <View style={Styles.signupButtonContainer}>
          <PrimaryButton
            buttonRadius={10}
            buttonLabel="Signup"
            buttonHeight={60}
            onPressHandler={handleSubmit(signupButtonHandler)}
          />
        </View>
      </View>

      <View style={Styles.signupFooterContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.footerText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginPage');
            }}>
            <Text style={Styles.footerLinkText}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
