import {StyleSheet} from 'react-native';
import {Colors, TextStyle} from '@app/constants';

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
    ...TextStyle.poppinsExtraLargeNormal,
    color: Colors.blackColor,
    position: 'absolute',
    top: 0,
  },
  subTitleText: {
    ...TextStyle.poppinsSmallLight,
    position: 'absolute',
    top: 28,
    color: Colors.productCardSubtitleColor,
  },
  priceText: {
    ...TextStyle.poppinsExtraLargeNormal,
    position: 'absolute',
    bottom: 0,
    color: Colors.blackColor,
  },
  discountedItemPriceContainer: {
    position: 'absolute',
    left: 80,
    bottom: 3,
  },
  discountedPriceText: {
    ...TextStyle.poppinsLargeNormal,
    color: Colors.productCardSubtitleColor,
    position: 'absolute',
    bottom: 0,
    textDecorationLine: 'line-through',
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
  priceContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
});
