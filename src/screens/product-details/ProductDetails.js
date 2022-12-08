import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  BackButton,
  PrimaryButton,
  ProductCounter,
  ProductHorizontalScroll,
} from '@app/commons';
import {Colors} from '@app/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FA from 'react-native-vector-icons/FontAwesome';
import {DashAdCarouselPagination} from '@app/screens';
import {useSelector} from 'react-redux';
import {
  CommentIcon,
  BrakePadImage,
  EngineFilterImage,
  HondaGearBoxImage1,
  HondaGearBoxImage2,
  HondaGearBoxImage3,
  HondaGearBoxImage4,
} from '@app/assets/svg';
import getImage from '@app/utils/getImage';

export default function ProductDetails({navigation}) {
  const currentProduct = useSelector(state => state.product.currentProduct);
  const productImage = getImage(currentProduct.item.productImageId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const renderCarouselItem = ({item}) => item;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <DashAdCarouselPagination
          dataArr={[productImage,<EngineFilterImage />, <BrakePadImage />]}
          renderCarouselItem={renderCarouselItem}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={{alignItems: 'stretch', padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.topLine}>{currentProduct.item.productCardCategory}</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <FA
                name="star"
                color={Colors.startIconYellow}
                size={15}
                style={{paddingTop: 20}}
              />

              <Text style={[styles.topLine, {paddingLeft: 10}]}>(4.5)</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.secondLine}>{currentProduct.item.productCardTitle}</Text>

            <Text style={styles.secondLine}>{`Rs. ${currentProduct.item.productCardPrice}`}</Text>
          </View>
        </View>

        <View style={{padding: 20}}>
          <Text style={styles.topLine}>{currentProduct.item.productCardSubTitle}</Text>
        </View>

        <View style={styles.productDescription}>
          <View>
            <ProductCounter />
          </View>

          <View>
            <TouchableOpacity style={styles.commentButton}>
              <CommentIcon />
            </TouchableOpacity>
          </View>

          <View>
            <PrimaryButton
              buttonLabel="Add to Cart"
              buttonIconName="cart-outline"
              buttonIconSize={24}
              buttonIconColor={Colors.whiteColor}
              buttonRadius={10}
              buttonStyle={styles.primaryButtonStyles}
              onPressHandler={() => alert('Add to Cart')}
            />
          </View>
        </View>

        <View style={{padding: 20}}>
          <View style={{paddingTop: 30}}>
            <Text style={styles.horizontalScrollTitle}>Similar to this</Text>
          </View>

          <View style={styles.similarItemTextStyle}>
            <ProductHorizontalScroll />
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
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.whiteColor,
    // width: '100%',
    paddingVertical: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  productDescription: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: Colors.borderBottomColor,
    borderBottomWidth: 2,
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: 10,
  },
  textBlack: {
    color: Colors.blackColor,
  },
  commentButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainBackgroundColor,
    padding: 15,
    borderRadius: 8,
  },
  topLine: {
    color: Colors.productCardSubtitleColor,
    fontFamily: 'Poppins',
    fontSize: 16,
    paddingTop: 20,
  },
  secondLine: {
    color: Colors.blackColor,
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold',
  },
  horizontalScrollTitle: {
    paddingTop: 10,
    color: Colors.blackColor,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonStyles: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 5,
    borderRadius: 10,
  },
  similarItemTextStyle: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
});
