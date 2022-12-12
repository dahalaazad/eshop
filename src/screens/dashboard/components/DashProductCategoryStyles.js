import {Colors} from '@app/constants';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // padding:10,
  },
  imageContainer: {
    backgroundColor: Colors.dashboardProductCategoryColor,
    padding: 10,
    width: '100%',
    borderRadius: 16,
  },
  activeImageContainer: {
    backgroundColor: Colors.dashboardProductCategoryActiveColor,
    padding: 10,
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.textLinkColor,
  },
  categoryTextContainer: {
    paddingTop: 4,
  },
  categoryText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.blackColor,
  },
  activeCategoryText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.textLinkColor,
  },
});
