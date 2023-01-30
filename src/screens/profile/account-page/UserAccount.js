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
import {useDispatch, useSelector} from 'react-redux';
import {signOutUser} from '@app/redux/slices/auth/authSlice';

export default function UserAccount({navigation}) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);

  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const toggleLogoutModal = () => {
    setLogoutModalVisible(!logoutModalVisible);
  };

  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const handleOnPressInformation = () => {
    navigation.navigate('UserProfile');
  };

  const handleOnPressSettings = () => {
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

  const logout = () => {
    dispatch(signOutUser())
      .unwrap()
      .then(originalPromiseResult => {
        originalPromiseResult?.data?.status === 200 &&
          navigation.navigate('AuthStack', {screen: 'LoginPage'});
      })
      .catch(rejectedValueOrSerializedError => {
        console.log(rejectedValueOrSerializedError);
      });
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
            source={Images.profilePlaceholderImage}
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

      <View style={Styles.middleContainer}>
        <View style={Styles.midContainer}>
          <UserAccountMenuItemGroup
            navigateInformation={handleOnPressInformation}
            navigateSettings={handleOnPressSettings}
            onShare={onShare}
          />
        </View>

        <View style={Styles.horizontalLine} />

        <View style={Styles.botContainer}>
          <UserAccountMenuItem
            menuText="Logout"
            menuLeft={<UserAccountLogout />}
            menuRight={<UserSettingMenuRightArrow />}
            menuSubText="Change your app settings"
            onPress={toggleLogoutModal}
          />
        </View>
      </View>

      <ProfileLogoutModal
        modalVisible={logoutModalVisible}
        toggleLogoutModal={toggleLogoutModal}
        closeLogoutModal={closeLogoutModal}>
        <ProfileLogoutCard
          closeLogoutModal={closeLogoutModal}
          logout={logout}
        />
      </ProfileLogoutModal>
    </ScrollView>
  );
}
