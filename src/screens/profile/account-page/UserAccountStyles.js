import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.loginBackgroundColor,
    // marginTop: 50,
  },
  topContainer: {
    height: 300,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    paddingTop: 15,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    height: 122,
    width: 122,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 80,
    // alignSelf: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  checkImageContainer: {
    position: 'absolute',
    left: 130,
    top: 90,
    overflow: 'hidden',
    borderRadius: 20,
  },
  nameTextContainer: {
    marginTop: 15,
  },
  emailTextContainer: {
    marginTop: 5,
  },
  emailText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.checkoutPriceText,
  },
  nameText: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '500',
    color: Colors.blackColor,
  },
  midContainer: {
    marginTop: 45,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
  },
  botContainer: {
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 0,
    width: '100%',
  },
  horizontalLine: {
    position: 'absolute',
    bottom: 90,
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: Colors.inactiveIconGrayColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  modalBackdropContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
