import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Colors, TextStyle} from '@app/constants';
import {MinusIcon, PlusIcon} from '@app/assets/svg';

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 35,
    width: 95,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: Colors.dashboardProductCategoryColor,
  },
  counterTextContainer: {
    paddingTop: 3,
  },
  counterText: {
    ...TextStyle.poppinsRegularNormal,
    color: Colors.textLinkColor,
  },
});

export default function ProductCounter() {
  const [count, setCount] = useState(1);

  const incrementCounter = () => {
    count < 100 && setCount(count + 1);
  };

  const decrementCounter = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={decrementCounter}>
        <MinusIcon />
      </TouchableOpacity>

      <View style={Styles.counterTextContainer}>
        <Text style={Styles.counterText}>{count}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.5} onPress={incrementCounter}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
}
