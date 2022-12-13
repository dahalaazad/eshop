import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.whiteColor,
    height: 161,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  logoutText: {...TextStyle.poppinsLargeNormal, color: Colors.blackColor},
  confirmText: {
    ...TextStyle.poppinsLargeLight,
    color: Colors.checkoutPriceText,
  },
});
