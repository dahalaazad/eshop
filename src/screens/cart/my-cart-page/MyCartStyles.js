import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.loginBackgroundColor,
    flex: 1,
  },
  topItemContainer: {
    // backgroundColor: 'red',
    marginTop: 30,
    height: '74%',
  },
  adItemContainer: {
    // backgroundColor: 'blue',
    marginTop: 20,
  },
  promotionTextContainer: {
    // backgroundColor: 'blue',
  },
  adContainer: {
    marginTop: 20,
  },
  bottomContainer: {
    width: '90%',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 20,
    // marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
