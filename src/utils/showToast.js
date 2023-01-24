import Toast from 'react-native-toast-message';

export const showToast = (type, title, subTitle) => {
  Toast.show({
    type: type,
    text1: title,
    text2: subTitle,
    visibilityTime: 2000,
    autoHide: true,
  });
};
