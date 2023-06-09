import {View, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/shop/ShopStyles';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import {ProductCardData} from '@app/constants';
import {useDispatch} from 'react-redux';
import {setCurrentProduct} from '@app/redux/slices/displayProducts/productSlice';

export default function Shop({navigation}) {
  const dispatch = useDispatch();

  const onProductCardPress = item => {
    const currentObj = {
      id: item.id,
      imageId: item.imageId,
      productCardCategory: item.productCardCategory,
      productCardTitle: item.productCardTitle,
      productCardSubTitle: item.productCardSubTitle,
      productCardPrice: item.productCardPrice,
    };
    dispatch(setCurrentProduct(currentObj));
    navigation.navigate('ProductDetails');
  };

  const productListRender = ({item}) => (
    <ProductCard
      key={item.id}
      product={item}
      productCardImage={item.productCardImage}
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
