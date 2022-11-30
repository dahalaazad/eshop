import React, {useState} from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Colors} from '@app/constants';

export default function DashProductSegmentedTab() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControl
      values={['Popular Product', 'Top Rated', 'Recommended']}
      selectedIndex={selectedIndex}
      onChange={event => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      }}
      style={{
        height: 45,
      }}
      tintColor={Colors.textLinkColor}
      fontStyle={{
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '400',
      }}
      activeFontStyle={{
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
      }}
      backgroundColor={Colors.dashboardProductCategoryColor}
    />
  );
}
