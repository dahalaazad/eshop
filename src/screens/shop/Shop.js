import {View, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/shop/ShopStyles';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import {ProductCardData} from '@app/constants';

export default function Shop({navigation}) {
  const onProductCardPress = itemId => {
    navigation.navigate('ProductDetails',{itemId: itemId,sourcePage:'shop'});
  };

  const productListRender = ({item}) => (
    <ProductCard
      productId={item.id}
      productCardImage={item.productCardImage}
      productCardTitle={item.productCardTitle}
      productCardSubTitle={item.productCardSubTitle}
      productCardPrice={item.productCardPrice}
      onPressHandler={onProductCardPress}
      titleTextFontWeight="600"
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topBarContainer}>
        <SearchBar
          labelText={'Search for products'}
          outlineColor={Colors.searchBarColor}
        />
        <FilterButton />
      </View>

      <View>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          contentContainerStyle={{paddingTop: 20, paddingBottom: 80}}
          data={ProductCardData}
          keyExtractor={data => data.id}
          renderItem={productListRender}
        />
      </View>
    </View>
  );
}
