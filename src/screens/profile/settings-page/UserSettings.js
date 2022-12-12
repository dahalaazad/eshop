import {View, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {BackButton} from '@app/commons';
import {Styles} from './UserSettingsStyles';
import {UserSettingMenuItem} from './components';
import {UserSettingMenuItemData} from '@app/constants';
import ProfileLogoutModal from '../components/ProfileLogoutModal';
import ProfileLanguagePopup from '../components/ProfileLanguagePopup';
import {useHeaderHeight} from '@react-navigation/elements';

export default function UserSettings({navigation}) {
  const headerHeight = useHeaderHeight();

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

  const changePasswordScreenNavigator = item => {
    item?.id === 1 ? navigation.navigate('ChangePassword') : () => {};
  };

  const menuItemRender = ({item}) => (
    <UserSettingMenuItem
      menuText={item?.text || 'Menu Item'}
      menuLeft={item?.left || 'left-icon'}
      menuRight={
        (
          <item.right
            isSwitchOn={switchStatus}
            onToggleSwitch={onToggleSwitch}
          />
        ) || 'right-icon'
      }
      onPress={() => changePasswordScreenNavigator(item)}
    />
  );

  return (
    <View style={[Styles.mainContainer,{marginTop:headerHeight}]}>
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
        closeLogoutModal={closeModal}
        // animationType="fade"
      >
        <ProfileLanguagePopup closeLanguageModal={closeModal} />
      </ProfileLogoutModal>
    </View>
  );
}
