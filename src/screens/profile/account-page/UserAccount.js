import {View, Text, Image, Share, ScrollView} from 'react-native';
import React, {useState} from 'react';
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
import ProfileLogoutModal from '../components/ProfileLogoutModal';
import {ProfileLogoutCard} from '@app/screens/profile';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function UserAccount({navigation}) {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!logoutModalVisible);
  };

  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  handleOnPressInformation = () => {
    navigation.navigate('UserProfile');
  };

  handleOnPressSettings = () => {
    navigation.navigate('UserSettings');
  };

  const onShare = async () => {
    try {
      await Share.share({
        title: 'This is Share Title',
        message: 'https://www.google.com/',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView style={Styles.mainContainer}>
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
          onShare={onShare}
        />
      </View>

      <View style={Styles.horizontalLine} />

      <View style={{paddingHorizontal: hp('5%'),paddingVertical:hp('2%')}}>
        <UserAccountMenuItem
          menuText="Logout"
          menuLeft={<UserAccountLogout />}
          menuRight={<UserSettingMenuRightArrow />}
          menuSubText="Change your app settings"
          onPress={toggleLogoutModal}
        />
      </View>

      <ProfileLogoutModal
        modalVisible={logoutModalVisible}
        toggleLogoutModal={toggleLogoutModal}
        closeLogoutModal={closeLogoutModal}>
        <ProfileLogoutCard closeLogoutModal={closeLogoutModal} />
      </ProfileLogoutModal>
    </ScrollView>
  );
}
