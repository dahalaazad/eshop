import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {BackButton} from '@app/commons';
import {Styles} from './UserSettingsStyles';
import {UserSettingMenuItem, UserSettingToggleButton} from './components';
import {UserSettingMenuItemData} from '@app/constants';
import ProfileLogoutModal from '../components/ProfileLogoutModal';
import ProfileLanguagePopup from '../components/ProfileLanguagePopup';

export default function UserSettings({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const [switchStatus, setSwitchStatus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [settingMenuData, setSettingMenuData] = useState(
    UserSettingMenuItemData,
  );

  const onToggleSwitch = () => setSwitchStatus(!switchStatus);

  const menuItemRender = ({item}) => (
    <UserSettingMenuItem
      menuText={item.text}
      menuLeft={item.left}
      menuRight={
        <item.right isSwitchOn={switchStatus} onToggleSwitch={onToggleSwitch} />
      }
      toggleModal={toggleModal}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 30}} />}
        contentContainerStyle={{paddingTop: 20, paddingBottom: 20}}
        data={settingMenuData}
        keyExtractor={data => data.id}
        renderItem={menuItemRender}
      />

      <ProfileLogoutModal
        modalVisible={modalVisible}
        toggleLogoutModal={toggleModal}
        closeLogoutModal={closeModal}>
        <ProfileLanguagePopup closeLanguageModal={closeModal} />
      </ProfileLogoutModal>
    </View>
  );
}
