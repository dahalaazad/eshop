import {View, Text, Button, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '@app/screens/cart/shopping-cart-page/ShoppingCartStyles';
import CartItem from '@app/screens/cart/components/CartItem';
import {ShoppingCartData} from '@app/constants';
import BrakePadImage from '@app/assets/svg/BrakePad.svg';

export default function ShoppingCart({navigation}) {
  const [shoppingCartData, setShoppingCartData] = useState(ShoppingCartData);
  console.log(shoppingCartData);

  const shoppingCartRender = ({item}) => (
    <CartItem
      svgImage={cartItemImage}
      titleText={item.shoppingCartTitle}
      subTitleText={item.shoppingCartSubTitle}
      itemPrice={item.shoppingCartPrice}
    />
  );

  const cartItemImage = (
    <BrakePadImage
      height={85}
      width={85}
      style={{
        alignSelf: 'center',
      }}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <FlatList
        // columnWrapperStyle={{justifyContent: 'space-around'}}
        ItemSeparatorComponent={() => <View style={{height: 25}} />}
        contentContainerStyle={{paddingTop: 50, paddingBottom: 80}}
        data={shoppingCartData}
        keyExtractor={data => data.id}
        renderItem={shoppingCartRender}
      />
    </View>
  );
}
