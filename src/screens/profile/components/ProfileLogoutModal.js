import {Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from '../account-page/UserAccountStyles';

export default function ProfileLogoutModal({
  modalVisible,
  toggleLogoutModal,
  closeLogoutModal,
  children,
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
        {children}
      </TouchableOpacity>
    </Modal>
  );
}
