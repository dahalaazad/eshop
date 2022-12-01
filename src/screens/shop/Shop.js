import {View, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/shop/ShopStyles';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import HondaGearBoxImage1 from '@app/assets/svg/HondaGearBox1.svg';
import HondaGearBoxImage2 from '@app/assets/svg/HondaGearBox2.svg';
import HondaGearBoxImage3 from '@app/assets/svg/HondaGearBox3.svg';
import HondaGearBoxImage4 from '@app/assets/svg/HondaGearBox4.svg';
import EngineFilterImage from '@app/assets/svg/EngineFilter.svg';
import BrakePadImage from '@app/assets/svg/BrakePad.svg';

export default function Shop({navigation}) {
  const onProductCardPress = itemId => {
    navigation.navigate('ProductDetails');
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
          data={productCardData}
          keyExtractor={data => data.id}
          renderItem={productListRender}
        />
      </View>
    </View>
  );
}

const productCardData = [
  {
    id: 1,
    productCardImage: <HondaGearBoxImage1 />,
    productCardTitle: 'Honda Gear Box',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 2,
    productCardImage: <HondaGearBoxImage2 />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 3,
    productCardImage: <HondaGearBoxImage3 />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 4,
    productCardImage: <HondaGearBoxImage4 />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 5,
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 6,
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 7,
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 8,
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
];
