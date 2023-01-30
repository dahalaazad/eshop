import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, PrimaryButton} from '@app/commons';
import {Styles} from './UserProfileStyles';
import {UserProfileInfoCard} from './components';
import Images from '@app/constants/Images';
import {UserSettingToggleButton} from '../settings-page/components';
import {useSelector} from 'react-redux';

export default function UserProfile({navigation}) {
  const userInfo = useSelector(state => state?.auth?.userInfo);
  const {fullName, phoneNumber, email, address, displayPicturePath} = userInfo;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const editProfileHandler = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={
              displayPicturePath
                ? {uri: displayPicturePath}
                : Images.profilePlaceholderImage
            }
            style={Styles.imageStyle}
            resizeMode="cover"
          />
        </View>

        <View style={Styles.userNameContainer}>
          <Text style={Styles.userNameText}>{fullName}</Text>
        </View>

        <View>
          <Text style={Styles.emailText}>{email}</Text>
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
        <UserProfileInfoCard
          fullName={fullName}
          phone={phoneNumber}
          email={email}
          address={address}
        />
      </View>
    </View>
  );
}
