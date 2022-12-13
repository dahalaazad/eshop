import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.loginBackgroundColor,
    paddingHorizontal: 20,
  },
  topContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {marginTop: 25},
  botContainer: {
    marginTop: 40,
  },
  userNameText: {
    ...TextStyle.poppinsLargeNormal,
    color: Colors.blackColor,
    textAlign: 'center',
  },
  emailText: {
    ...TextStyle.poppinsRegularLight,
    color: Colors.productCardSubtitleColor,
    textAlign: 'center',
  },
});
