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
  productCategoryContainer: {
    alignItems: 'center',
    marginTop: 25,
    height: 100,
    paddingHorizontal: 12,
  },
  buttonTabContainer: {
    height: 60,
    marginTop: 25,
    backgroundColor: 'white',
    borderRadius: 13,
  },
  productCardContainer: {
    height: '100%',
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
