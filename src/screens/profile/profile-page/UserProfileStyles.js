import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.loginBackgroundColor,
    marginTop: 50,
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
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.blackColor,
    fontSize: 16,
    textAlign: 'center',
  },
  emailText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: Colors.productCardSubtitleColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
