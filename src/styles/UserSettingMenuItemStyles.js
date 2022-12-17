import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    // paddingRight: 15,
  },
  textContainer: {
    paddingLeft: 15,
  },
  settingText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.blackColor,
    fontSize: 16,
  },
  leftImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.itemMenuIconBackgroundColor,
    padding: 15,
    borderRadius: 8,
    height: 46,
    width: 46,
  },
});
