import {Colors} from '@app/constants';
import {StyleSheet} from 'react-native';
import {TextStyle} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gray',
    height: 180,
    borderRadius: 20,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
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
    ...TextStyle.poppinsRegularNormal,
    color: Colors.dashboardAdTitleColor,
  },
  adSubTitle: {
    ...TextStyle.poppinsLargeBold,
    color: Colors.whiteColor,
    zIndex: 1,
    paddingRight: 10,
  },
  buttonContainer: {
    paddingTop: 10,
  },
});
