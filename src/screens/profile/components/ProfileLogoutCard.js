import {View, Text} from 'react-native';
import React from 'react';
import {Styles} from './ProfileLogoutCardStyles';
import {PrimaryButton} from '@app/commons';

export default function ProfileLogoutCard({closeLogoutModal}) {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.logoutText}>Logout</Text>

      <Text style={Styles.confirmText}>Are you sure you want to logout?</Text>

      <View style={Styles.buttonContainer}>
        <PrimaryButton
          buttonHeight={44}
          buttonWidth="48%"
          buttonLabel="No"
          buttonRadius={5}
          isOutlined
          onPressHandler={closeLogoutModal}
        />

        <PrimaryButton
          buttonHeight={44}
          buttonWidth="48%"
          buttonLabel="Yes"
          buttonRadius={5}
        />
      </View>
    </View>
  );
}
