import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import MinusIcon from '@app/assets/svg/CounterMinusIcon.svg';
import PlusIcon from '@app/assets/svg/CounterPlusIcon.svg';

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
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
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
