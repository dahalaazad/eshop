import {View, Text, ScrollView, FlatList} from 'react-native';
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
      svgImage={
        <item.shoppingCartImage
          height={80}
          width={85}
          style={{
            top: 2,
          }}
        />
      }
      titleText={item.shoppingCartTitle}
      subTitleText={item.shoppingCartSubTitle}
      itemPrice={item.shoppingCartPrice}
      itemDiscountedPrice={item.shoppingCartDiscountedPrice}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topItemContainer}>
        <FlatList
          // columnWrapperStyle={{justifyContent: 'space-around'}}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          contentContainerStyle={{paddingTop: 50, paddingBottom: 10}}
          data={myCartData}
          keyExtractor={data => data.id}
          renderItem={myCartRender}
          ListFooterComponent={() => (
            <View style={Styles.adItemContainer}>
              <View style={Styles.promotionTextContainer}>
                <MyCartPromotionText />
              </View>
              <View style={Styles.adContainer}>
                <MyCartAdComponent />
              </View>
            </View>
          )}
        />
      </View>
      <View style={Styles.bottomContainer}>
        <View style={Styles.billContainer}>
          <MyCartBillContainer />
        </View>
        <View style={Styles.buttonContainer}>
          <PrimaryButton buttonHeight={51} buttonLabel="Proceed to Checkout" />
        </View>
      </View>
    </View>
  );
}
