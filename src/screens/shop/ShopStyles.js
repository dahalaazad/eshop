import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.loginBackgroundColor,
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
});
