import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Checkbox} from 'react-native-paper';
import {Colors, InputRules} from '@app/constants';
import {PrimaryButton, InputField} from '@app/commons';
import {Styles} from '@app/screens/login/LoginStyles';
import {MainLogoColor} from '@app/assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '@app/redux/slices/auth/authSlice';
import {showToast} from '@app/utils/showToast';

export default function Signup({navigation}) {
  const dispatch = useDispatch();
  const isSignedUp = useSelector(state => state?.auth?.isSignedUp);

  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [checked, setChecked] = useState(false);

  const signupButtonHandler = signupData => {
    const {fullName, email, password, confirmPassword} = signupData;
    // console.log(fullName, email, password);
    dispatch(
      signupUser({
        customer: {
          full_name: fullName,
          email: email,
          password: password,
        },
      }),
    )
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult);
        const statusCode = originalPromiseResult?.data?.status?.code;
        if (statusCode === 200) {
          navigation.navigate('MainStack');
          showToast('success', 'Success', 'Welcome to E-Mistiri');
        }
      })
      .catch(rejectedValueOrSerializedError => {
        const errorMessage =
          rejectedValueOrSerializedError?.data?.status?.errors;
        console.log(errorMessage);

        Array.isArray(errorMessage) && errorMessage.length
          ? errorMessage.map(item => {
              const fieldName = item.toLowerCase().includes('email')
                ? 'email'
                : item.toLowerCase().includes('name')
                ? 'fullName'
                : null;
              setError(fieldName, {
                type: 'manual',
                message: item || 'Action object error',
              });
            })
          : [];
      });
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
            <InputField
              control={control}
              errors={errors}
              inputName="fullName"
              rules={InputRules.fullName}
              labelText="Full Name"
              isPassword={false}
            />
          </View>

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

          <View>
            <InputField
              control={control}
              errors={errors}
              inputName="confirmPassword"
              rules={{
                ...InputRules.confirmPassword,
                validate: value => {
                  if (value !== watch('password')) {
                    return 'Password does not match';
                  }
                },
              }}
              labelText="Confirm Password"
              isPassword={true}
              passwordIcon={true}
            />
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
