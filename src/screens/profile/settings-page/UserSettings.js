import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {BackButton} from '@app/commons';
import {Styles} from './UserSettingsStyles';
import {UserSettingMenuItem, UserSettingToggleButton} from './components';
import {UserSettingMenuItemData} from '@app/constants';

export default function UserSettings({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const [switchStatus, setSwitchStatus] = useState(false);

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
    <View style={Styles.mainContainer}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 30}} />}
        contentContainerStyle={{paddingTop: 20, paddingBottom: 20}}
        data={settingMenuData}
        keyExtractor={data => data.id}
        renderItem={menuItemRender}
      />
    </View>
  );
}
