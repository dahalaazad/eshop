import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, PrimaryButton} from '@app/commons';
import {Styles} from './UserProfileStyles';
import {UserProfileBeardedMan} from '@app/assets/svg';
import {UserProfileInfoCard} from './components';

export default function UserProfile({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const editProfileHandler = () => {};

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        <View style={Styles.imageContainer}>
          <UserProfileBeardedMan height={107} width={107} />
        </View>

        <View style={Styles.userNameContainer}>
          <Text style={Styles.userNameText}>User Name</Text>
        </View>

        <View style={Styles.emailContainer}>
          <Text style={Styles.emailText}>random@email.com</Text>
        </View>

        <View style={Styles.buttonContainer}>
          <PrimaryButton
            buttonLabel="Edit Profile"
            buttonHeight={50}
            buttonWidth={180}
            buttonRadius={110}
            onPressHandler={editProfileHandler}
          />
        </View>
      </View>

      <View style={Styles.botContainer}>
        <UserProfileInfoCard />
      </View>
    </View>
  );
}
