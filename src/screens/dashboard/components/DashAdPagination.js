import {View, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
  },
  animatedContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default function DashAdPagination({index, length, animValue}) {
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View style={Styles.mainContainer}>
      <Animated.View style={[Styles.animatedContainer, animStyle]} />
    </View>
  );
}
