import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '@app/screens/cart/shopping-cart-page/ShoppingCartStyles';
import CartItem from '@app/screens/cart/components/CartItem';
import {ShoppingCartData} from '@app/constants';
import {CartCheckout} from '@app/screens/cart/components';

export default function ShoppingCart({navigation}) {
  const [shoppingCartData, setShoppingCartData] = useState(ShoppingCartData);

  const shoppingCartRender = ({item}) => (
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
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <FlatList
        // columnWrapperStyle={{justifyContent: 'space-around'}}
        ItemSeparatorComponent={() => <View style={{height: 25}} />}
        contentContainerStyle={{paddingTop: 30, paddingBottom: 40}}
        data={shoppingCartData}
        keyExtractor={data => data.id}
        renderItem={shoppingCartRender}
      />

      <View style={Styles.checkoutContainer}>
        <CartCheckout />
      </View>
    </View>
  );
}
