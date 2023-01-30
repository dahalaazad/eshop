import {PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const changeProfilePhoto = setSelectedImageResponse => {
  launchImageLibrary(
    {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      maxWidth: 122,
      maxHeight: 122,
    },
    setSelectedImageResponse,
  );
};

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      captureNewPhoto();
    }
  } catch (err) {
    console.warn(err);
  }
};

const captureNewPhoto = setSelectedImageResponse => {
  launchCamera(
    {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'front',
    },
    setSelectedImageResponse,
  );
};
