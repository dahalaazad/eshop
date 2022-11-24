import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import InputField from '../../../commons/InputField';
import {StyleSheet} from 'react-native';
import MainLogo from '../../../assets/svg/MainLogo.svg';
import {Colors} from '../../../constants';
import PrimaryButton from '../../../commons/PrimaryButton';
import {useForm, Controller} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    paddingBottom: 12,
  },
  forgotPasswordLink: {
    fontFamily: 'Poppins',
    color: Colors.textLinkColor,
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 15,
  },
  signupButtonContainer: {
    paddingTop: 35,
  },
  errorText: {
    paddingLeft: 16,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: Colors.errorTextColor,
  },
  privacyPolicyContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  policyLinkText: {
    color: Colors.textLinkColor,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});

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

  const [checked, setChecked] = React.useState(false);

  const signupButtonHandler = signupData => {
    console.log('Signup Pressed', signupData);
    navigation.navigate('LoginPage');
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={{paddingTop: 45, paddingBottom: 32}}>
            <MainLogo />
          </View>

          <Text style={Styles.headingText}>Create a New Account</Text>

          <Text style={Styles.subtitleText}>
            Because when the sun shine we shine together told you I'll be here
            forever
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

        <KeyboardAvoidingView>
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
                <Text
                  style={Styles.policyLinkText}
                  onPress={() => {
                    console.log('Terms of Service');
                  }}>
                  Terms of Service
                </Text>{' '}
                and{' '}
                <Text
                  style={Styles.policyLinkText}
                  accessible={true}
                  onPress={() => {
                    console.log('Privacy Policy');
                  }}>
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
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={Styles.footerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.footerText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={Styles.footerLinkText}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
