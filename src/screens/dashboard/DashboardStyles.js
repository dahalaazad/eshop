import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.loginBackgroundColor,
    flex: 1,
    paddingHorizontal: 20,
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  adContainer: {
    marginTop: 15,
  },
  adIndicatorContainer: {
    top: 0,
  },
  productCategoryContainer: {
    alignItems: 'center',
    marginTop: 25,
    height: 100,
    paddingHorizontal: 12,
  },
  buttonTabContainer: {
    marginTop: 25,
    padding: 5,
    backgroundColor: Colors.dashboardProductCategoryColor,
    borderRadius: 13,
    justifyContent: 'center',
  },
  productCardContainer: {
    height: '100%',
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dotStyle: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 5,
    marginHorizontal: 2,
  },
});
