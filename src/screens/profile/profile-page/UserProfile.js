import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, PrimaryButton} from '@app/commons';
import {Styles} from './UserProfileStyles';
import {UserProfileInfoCard} from './components';
import Images from '@app/constants/Images';
import {UserSettingToggleButton} from '../settings-page/components';

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
        <View>
          {/* <UserProfileWomanGlasses /> */}
          <Image source={Images.profileBeardedMan} resizeMode="cover" />
        </View>

        <View style={Styles.userNameContainer}>
          <Text style={Styles.userNameText}>User Name</Text>
        </View>

        <View>
          <Text style={Styles.emailText}>random@email.com</Text>
        </View>

        <View>
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
