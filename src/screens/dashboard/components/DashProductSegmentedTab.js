import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Colors} from '@app/constants';

const Styles = StyleSheet.create({
  mainContainer: {
    height: 45,
  },
  inactiveFont: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '400',
  },
  activeFont: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default function DashProductSegmentedTab() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControl
      values={['Popular Product', 'Top Rated', 'Recommended']}
      selectedIndex={selectedIndex}
      onChange={event => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      }}
      style={Styles.mainContainer}
      tintColor={Colors.textLinkColor}
      fontStyle={Styles.inactiveFont}
      activeFontStyle={Styles.activeFont}
      backgroundColor={Colors.dashboardProductCategoryColor}
    />
  );
}
