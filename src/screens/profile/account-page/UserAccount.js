import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './UserAccountStyles';
import Images from '@app/constants/Images';
import {
  AccountProfileCheck,
  UserSettingMenuRightArrow,
  UserAccountLogout,
} from '@app/assets/svg';
import {AccountRewardPointCard, UserAccountMenuItemGroup} from './components';
import UserAccountMenuItem from './components/UserAccountMenuItem';

export default function UserAccount({navigation}) {
  handleOnPressInformation = () => {
    navigation.navigate('UserProfile');
  };

  handleOnPressSettings = () => {
    navigation.navigate('UserSettings');
  };

  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0.5, y: 0.1}}
        // end={{x: 1, y: 0}}
        colors={['#F5F5F5', '#ADB0D9']}
        style={Styles.topContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={Images.profileManImage}
            style={Styles.imageStyle}
            resizeMode="cover"
          />
        </View>

        <View style={Styles.checkImageContainer}>
          <AccountProfileCheck />
        </View>

        <View style={Styles.nameTextContainer}>
          <Text style={Styles.nameText}>Jenny Wilson</Text>
        </View>

        <View style={Styles.emailTextContainer}>
          <Text style={Styles.emailText}>example@mail.com</Text>
        </View>

        <View>
          <AccountRewardPointCard />
        </View>
      </LinearGradient>

      <View style={Styles.midContainer}>
        <UserAccountMenuItemGroup
          navigateInformation={handleOnPressInformation}
          navigateSettings={handleOnPressSettings}
        />
      </View>

      <View style={Styles.horizontalLine} />

      <View style={Styles.botContainer}>
        <UserAccountMenuItem
          menuText="Logout"
          menuLeft={<UserAccountLogout />}
          menuRight={<UserSettingMenuRightArrow />}
          menuSubText="Change your app settings"
        />
      </View>
    </View>
  );
}
