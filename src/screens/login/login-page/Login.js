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
import {InputRules} from '@app/constants';
import {Styles} from '@app/screens/login/LoginStyles';
import {MainLogoColor} from '@app/assets/svg';

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
            <MainLogoColor />
          </View>

          <Text style={Styles.headingText}>Welcome Back</Text>

          <Text style={Styles.subtitleText}>
            There are many variations of passages
          </Text>
        </View>
        <View style={{paddingBottom: 45, paddingTop: 40}}>
          <View style={{paddingBottom: 10}}>
            <InputField
              control={control}
              errors={errors}
              inputName="email"
              rules={InputRules.email}
              labelText="Email Address"
              isPassword={false}
            />

            <InputField
              control={control}
              errors={errors}
              inputName="password"
              rules={InputRules.password}
              labelText="Password"
              isPassword={true}
              passwordIcon={true}
            />
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Text style={Styles.forgotPasswordLink}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={Styles.loginButtonContainer}>
            <PrimaryButton
              buttonRadius={10}
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
