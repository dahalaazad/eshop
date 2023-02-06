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
  imageContainer: {
    height: 122,
    width: 122,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 80,
    // alignSelf: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
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
