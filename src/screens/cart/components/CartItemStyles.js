import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.whiteColor,
    height: 100,
    marginHorizontal: 20,
    borderRadius: 16,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 5,
    // position: 'relative',
  },
  leftImageContainer: {
    justifyContent: 'center',
  },
  midTextContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginLeft: 10,
    // width: 150,
  },
  titleText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: Colors.blackColor,
    position: 'absolute',
    fontWeight: '500',
    top: 0,
  },
  subTitleText: {
    position: 'absolute',
    top: 28,
    fontFamily: 'Poppins',
    fontSize: 12,
    color: Colors.productCardSubtitleColor,
    fontWeight: '400',
  },
  priceText: {
    position: 'absolute',
    bottom: 0,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.blackColor,
  },
  rightButtonContainer: {
    position: 'relative',
    width: '28%',
    // backgroundColor: 'blue',
  },
  crossButton: {
    position: 'absolute',
    right: 2,
  },
  counterButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 2,
  },
});
