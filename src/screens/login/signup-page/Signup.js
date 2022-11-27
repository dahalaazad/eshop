import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from 'react-native-paper';
import {Colors} from '@app/constants';
import {PrimaryButton, InputField} from '@app/commons';
import {Styles} from '@app/screens/login/LoginStyles';
import MainLogo from '@app/assets/svg/MainLogo.svg';

export default function Signup({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      email: '',
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
            <MainLogo />
          </View>

          <Text style={Styles.headingText}>Create a New Account</Text>

          <Text style={Styles.subtitleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </View>

        <View style={{paddingTop: 20}}>
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

          <View style={{paddingBottom: 10}}>
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
                required: true,
                validate: value =>
                  value === watch('password') || 'The passwords do not match',
              }}
              name="confirmPassword"
            />
            {errors.confirmPassword?.type === 'required' ? (
              <Text style={Styles.errorText}>Confirm your password</Text>
            ) : null}
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
            <Text style={{...Styles.subtitleText, fontSize: 14}}>
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
