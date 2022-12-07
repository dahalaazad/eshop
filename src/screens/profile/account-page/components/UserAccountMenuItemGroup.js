import {View, Text} from 'react-native';
import React from 'react';
import UserAccountMenuItem from './UserAccountMenuItem';
import {
  UserAccountIcon,
  UserAccountSettingIcon,
  UserAccountShareIcon,
  UserAccountAboutIcon,
  UserSettingMenuRightArrow,
} from '@app/assets/svg';

export default function UserAccountMenuItemGroup({
  navigateInformation,
  navigateSettings,
}) {
  return (
    <View>
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
