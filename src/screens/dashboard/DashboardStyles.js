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
  },
  adContainer: {
    paddingTop: 15,
  },
});
