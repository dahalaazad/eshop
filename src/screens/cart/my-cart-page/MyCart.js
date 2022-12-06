import {View, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {BackButton, PrimaryButton} from '@app/commons';
import {Styles} from './MyCartStyles';
import {MyCartData} from '@app/constants';
import {
  CartItem,
  MyCartPromotionText,
  MyCartAdComponent,
  MyCartBillContainer,
} from '../components';

export default function MyCart({navigation}) {
  const [myCartData, setMyCartData] = useState(MyCartData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (...props) => (
        <BackButton {...props} onBackPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const myCartRender = ({item}) => (
    <CartItem
      svgImage={<item.shoppingCartImage height={80} width={80} />}
      titleText={item?.shoppingCartTitle || 'Title'}
      subTitleText={item?.shoppingCartSubTitle || 'Subtitle'}
      itemPrice={item?.shoppingCartPrice || '0'}
      itemDiscountedPrice={item?.shoppingCartDiscountedPrice || '0'}
    />
  );

  const renderFooterComponent = () => (
    <View style={Styles.adItemContainer}>
      <View style={Styles.promotionTextContainer}>
        <MyCartPromotionText />
      </View>

      <View style={Styles.adContainer}>
        <MyCartAdComponent />
      </View>
    </View>
  );

  const CartItemFlatList = (
    <FlatList
      // columnWrapperStyle={{justifyContent: 'space-around'}}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      contentContainerStyle={{paddingTop: 50, paddingBottom: 50}}
      data={myCartData}
      keyExtractor={data => data.id}
      renderItem={myCartRender}
      ListFooterComponent={renderFooterComponent}
    />
  );

  const checkoutButtonHandler = () => {};

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topItemContainer}>{CartItemFlatList}</View>
      <View style={Styles.bottomContainer}>
        <View style={Styles.billContainer}>
          <MyCartBillContainer />
        </View>

        <View style={Styles.buttonContainer}>
          <PrimaryButton
            buttonHeight={51}
            buttonRadius={5}
            buttonLabel="Proceed to Checkout"
            onPressHandler={checkoutButtonHandler}
          />
        </View>
      </View>
    </View>
  );
}
