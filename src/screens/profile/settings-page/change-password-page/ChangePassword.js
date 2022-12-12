import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, InputField, PrimaryButton} from '@app/commons';
import {Colors} from '@app/constants';
import {useForm, Controller} from 'react-hook-form';
import {Styles} from '@app/screens/login/LoginStyles';

export default function ChangePassword({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const signupButtonHandler = signupData => {
    alert('Changes saved');
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topTextContainer}>
          <Text style={styles.textStyle}>Current Password</Text>

          <Text style={styles.blueTextStyle}>Forgot Password?</Text>
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
                labelText="Current Password"
                isPassword={true}
                passwordIcon={true}
                onBlur={onBlur}
                onChange={onChange}
                outlineColor={Colors.changePasswordInputBorderColor}
                value={value}
              />
            )}
            name="currentPassword"
          />
          {errors.currentPassword?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your current password</Text>
          ) : errors.currentPassword?.type === 'pattern' ? (
            <Text style={Styles.errorText}>Password pattern doesn't match</Text>
          ) : errors.currentPassword?.type === 'minLength' ? (
            <Text style={Styles.errorText}>Too short</Text>
          ) : null}
        </View>
      </View>

      <View style={{paddingVertical: 15}}>
        <Text style={styles.textStyle}>New Password</Text>

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
              labelText="New Password"
              isPassword={true}
              passwordIcon={true}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              outlineColor={Colors.changePasswordInputBorderColor}
            />
          )}
          name="newPassword"
        />
        {errors.newPassword?.type === 'required' ? (
          <Text style={Styles.errorText}>Enter new password</Text>
        ) : errors.newPassword?.type === 'pattern' ? (
          <Text style={Styles.errorText}>Password pattern doesn't match</Text>
        ) : errors.newPassword?.type === 'minLength' ? (
          <Text style={Styles.errorText}>Too short</Text>
        ) : null}

        <View style={{paddingVertical: 10}}>
          <Text style={styles.textStyle}>Confirm Password</Text>

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
                labelText="Confirm Password"
                isPassword={true}
                passwordIcon={true}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                outlineColor={Colors.changePasswordInputBorderColor}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword?.type === 'required' ? (
            <Text style={Styles.errorText}>Enter your current password</Text>
          ) : errors.confirmPassword?.type === 'pattern' ? (
            <Text style={Styles.errorText}>Password pattern doesn't match</Text>
          ) : errors.confirmPassword?.type === 'minLength' ? (
            <Text style={Styles.errorText}>Too short</Text>
          ) : null}
        </View>

        <View style={{marginVertical: 100, paddingHorizontal: 10}}>
          <PrimaryButton
            buttonLabel="Save Changes"
            buttonRadius={35}
            buttonHeight={65}
            onPressHandler={handleSubmit(signupButtonHandler)}
          />
        </View>
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
