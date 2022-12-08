import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {BackButton, PrimaryButton, ProductCounter,ProductHorizontalScroll} from '@app/commons';
import {AllProductList, Colors} from '@app/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FA from 'react-native-vector-icons/FontAwesome';
import DashAdCarouselPagination from '@app/screens/dashboard/components/DashAdCarouselPagination';
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


export default function ProductDetails({route, navigation}) {
  const {itemId, sourcePage} = route.params;
  console.log(itemId, sourcePage);
  const product = useSelector(state => state.product);
  const dashboardProduct = product?.dashboardProducts;
  const shopProduct = product?.shopProduct;
  const currentProduct =
    sourcePage === 'dashboard'
      ? dashboardProduct?.filter(item => item.id === itemId)
      : shopProduct?.filter(item => item.id === itemId);
  const shopProductImageList = [
    <HondaGearBoxImage1 height="100%" width="100%" />,
    <HondaGearBoxImage2 height="100%" width="100%" />,
    <HondaGearBoxImage3 height="100%" width="100%" />,
    <HondaGearBoxImage4 height="100%" width="100%" />,
    <EngineFilterImage height="100%" width="100%" />,
    <BrakePadImage height="100%" width="100%" />,
    <EngineFilterImage height="100%" width="100%" />,
    <BrakePadImage height="100%" width="100%" />,
  ];

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
          dataArr={
            sourcePage === 'dashboard'
              ? currentProduct[0].productCardCategory == 'Brake Pad'
                ? [
                    <BrakePadImage height="100%" width="100%" />,
                    <BrakePadImage height="50%" width="50%" />,
                  ]
                : [
                    <EngineFilterImage height="100%" width="100%" />,
                    <EngineFilterImage height="50%" width="50%" />,
                  ]
              : [shopProductImageList[itemId - 1]]
          }
          renderCarouselItem={renderCarouselItem}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={{alignItems: 'stretch', padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.topLine}>
              {sourcePage === 'dashboard'
                ? currentProduct[0].productCardCategory
                : AllProductList.shopProducts[itemId - 1].productCardCategory}
            </Text>
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
            <Text style={styles.secondLine}>
              {sourcePage === 'dashboard'
                ? currentProduct[0].productCardTitle
                : AllProductList.shopProducts[itemId - 1].productCardTitle}
            </Text>
            <Text style={styles.secondLine}>
              {`Rs. ${
                sourcePage === 'dashboard'
                  ? currentProduct[0].productCardPrice
                  : AllProductList.shopProducts[itemId - 1].productCardPrice
              }`}
            </Text>
          </View>
        </View>

        <View style={{padding: 20}}>
          <Text style={styles.topLine}>
            {sourcePage === 'dashboard'
              ? currentProduct[0].productCardSubTitle
              : AllProductList.shopProducts[itemId - 1].productCardSubTitle}
          </Text>
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
              buttonStyle={{
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                paddingTop: 5,
                borderRadius: 10,
              }}
              onPressHandler={() => alert('Add to Cart')}
            />
          </View>
        </View>

        <View style={{padding: 20}}>
          <View style={{paddingTop: 30}}>
            <Text style={styles.horizontalScrollTitle}>Similar to this</Text>
          </View>
          <View style={{flexDirection: 'row', paddingBottom: 10}}>
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
});
