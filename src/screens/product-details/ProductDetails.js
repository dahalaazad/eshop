import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, PrimaryButton} from '@app/commons';
import {Colors} from '@app/constants';

export default function ProductDetails({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textBlack}>Carousel Here</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textBlack}>BREAK PAD</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={styles.textBlack}>StarIcon</Text>
            <Text style={styles.textBlack}>(4.5)</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textBlack}>FZ Break Pad</Text>
          <Text style={styles.textBlack}>Rs. 1,999</Text>
        </View>

        <View>
          <Text style={styles.textBlack}>LoremIpsum</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.textBlack}>Counter</Text>
          </View>
          <View>
            <Text style={styles.textBlack}>Icon Comment</Text>
          </View>
          <View>
            <PrimaryButton
              buttonLabel="Add to Cart"
              buttonHeight={50}
              buttonIconName="cart-outline"
              buttonIconSize={24}
              buttonIconColor={Colors.whiteColor}
              onPressHandler={() => alert('Add to Cart')}
            />
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.textBlack}>Similar to this</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textBlack}>HOrizontal Flatlist scroll</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.loginBackgroundColor,
  },
  topContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.whiteColor,
    width: '100%',
  },
  textBlack: {
    color: Colors.blackColor,
  },
});
