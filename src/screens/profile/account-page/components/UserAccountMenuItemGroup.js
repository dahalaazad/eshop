import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UserAccountMenuItem from './UserAccountMenuItem';
import {
  UserAccountIcon,
  UserAccountSettingIcon,
  UserAccountShareIcon,
  UserAccountAboutIcon,
  UserSettingMenuRightArrow,
} from '@app/assets/svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '@app/constants';

export default function UserAccountMenuItemGroup({
  navigateInformation,
  navigateSettings,
  onShare,
}) {
  return (
    <View style={styles.container}>
      <UserAccountMenuItem
        menuText="My Information"
        menuLeft={<UserAccountIcon />}
        menuRight={<UserSettingMenuRightArrow />}
        menuSubText="View your personal information"
        onPress={navigateInformation}
      />

      <UserAccountMenuItem
        menuText="Settings"
        menuLeft={<UserAccountSettingIcon />}
        menuRight={<UserSettingMenuRightArrow />}
        menuSubText="Change your app settings"
        onPress={navigateSettings}
      />

      <UserAccountMenuItem
        menuText="Share"
        menuLeft={<UserAccountShareIcon />}
        menuRight={<UserSettingMenuRightArrow />}
        menuSubText="Lorem ipsum available"
        onPress={onShare}
      />

      <UserAccountMenuItem
        menuText="About Us"
        menuLeft={<UserAccountAboutIcon />}
        menuRight={<UserSettingMenuRightArrow />}
        menuSubText="Lorem ipsum available"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('6%'),
    paddingHorizontal: wp('5%'),
    borderBottomColor: Colors.profilePageBorderColor,
  },
});
