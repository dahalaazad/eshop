import {Colors} from '@app/constants';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gray',
    height: 180,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
  },
  rightContainer: {
    position: 'absolute',
    right: 0,
  },
  leftContainer: {
    width: '70%',
    paddingLeft: 25,
  },
  adTitle: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: Colors.dashboardAdTitleColor,
  },
  adSubTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: Colors.whiteColor,
    fontWeight: '600',
    zIndex: 1,
  },
  buttonContainer: {
    paddingTop: 10,
  },
});
