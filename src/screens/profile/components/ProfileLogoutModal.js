import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileLogoutCard} from '@app/screens/profile';
import {Styles} from '../account-page/UserAccountStyles';

export default function ProfileLogoutModal({
  modalVisible,
  toggleLogoutModal,
  closeLogoutModal,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleLogoutModal}
      statusBarTranslucent={true}
      hardwareAccelerated={true}>
      <TouchableOpacity
        activeOpacity={1}
        style={Styles.modalBackdropContainer}
        onPress={closeLogoutModal}>
        <ProfileLogoutCard closeLogoutModal={closeLogoutModal} />
      </TouchableOpacity>
    </Modal>
  );
}
