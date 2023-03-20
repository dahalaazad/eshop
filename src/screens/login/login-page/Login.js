import React from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {InputField, PrimaryButton} from '@app/commons';
import {Colors, InputRules} from '@app/constants';
import {Styles} from '@app/screens/login/LoginStyles';
import {MainLogoColor} from '@app/assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {authUser} from '@app/redux/slices/auth/authSlice';
import {showToast} from '@app/utils/showToast';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state?.auth?.loading);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginButtonHandler = loginData => {
    const {email, password} = loginData;

    dispatch(
      authUser({
        userDetails: {
          customer: {
            email: email,
            password: password,
          },
        },
        loginURL: 'customers/sign_in',
      }),
    )
      .unwrap()
      .then(originalPromiseResult => {
        const statusCode = originalPromiseResult?.data?.status?.code;
        if (statusCode === 200) {
          navigation.navigate('MainStack');

          showToast('success', 'Success', 'Welcome to E-Mistiri');
        }
      })
      .catch(rejectedValueOrSerializedError => {
        return rejectedValueOrSerializedError;
      });
  };

  return (
    <KeyboardAwareScrollView
      style={Styles.mainContainer}
      enableOnAndroid={false}
      keyboardShouldPersistTaps="handled">
      <Spinner
        visible={loading}
        color={Colors.whiteColor}
        overlayColor={Colors.loadingOverlayColor}
        animation="fade"
      />

      <View>
        <View style={{alignItems: 'center'}}>
          <View style={{paddingTop: 65, paddingBottom: 52}}>
            <MainLogoColor />
          </View>

          <Text style={Styles.headingText}>Welcome Back</Text>

          <Text style={Styles.subtitleText}>
            Sign in to your E-Mistiri account
          </Text>
        </View>
        <View style={{paddingBottom: 45, paddingTop: 40}}>
          <View style={{paddingBottom: 10}}>
            <View style={{paddingBottom: 5}}>
              <InputField
                control={control}
                errors={errors}
                inputName="email"
                rules={InputRules.email}
                labelText="Email Address"
                isPassword={false}
              />
            </View>

            <View style={{paddingBottom: 5}}>
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
