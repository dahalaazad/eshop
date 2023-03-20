import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {Colors} from '@app/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  changeProfilePhoto,
  requestCameraPermission,
} from '@app/utils/profilePhoto';

export default function ImageSelectModal({
  modalState,
  modalChange,
  setSelectedImageResponse,
}) {
  const closeModal = () => {
    modalChange(false);
  };

  return (
    <Modal
      isVisible={modalState}
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      animationIn="fadeInUp"
      animationInTiming={400}
      backdropTransitionInTiming={200}
      animationOutTiming={400}
      useNativeDriver={true}
      deviceHeight={4000}
      useNativeDriverForBackdrop={true}
      statusBarTranslucent={true}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[styles.modalOptions, styles.topModalOptions]}
          onPress={() => {
            changeProfilePhoto(setSelectedImageResponse);
            closeModal();
          }}>
          <Text style={styles.optionsText}>Choose existing photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalOptions}
          onPress={() => {
            requestCameraPermission(setSelectedImageResponse);
            closeModal();
          }}>
          <Text style={styles.optionsText}>Take photo</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 12,
    backgroundColor: Colors.selectPictureBackgroundColor,
    height: hp('25%'),
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalOptions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topModalOptions: {
    borderBottomColor: Colors.checkboxColor,
    borderBottomWidth: 1,
  },
  optionsText: {
    color: Colors.selectPictureColor,
    fontSize: 20,
    fontWeight: '600',
  },
});
