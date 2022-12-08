import React, {useRef, useState} from 'react';
import {View, ScrollView, FlatList, Animated} from 'react-native';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/dashboard/DashboardStyles';
import {
  ProductCategoryBike,
  ProductCategoryScooter,
  ProductCategoryCar,
  ProductCategoryAccessories,
  EngineFilterImage,
  BrakePadImage,
  CastrolImage,
} from '@app/assets/svg';
import {
  DashProductCategory,
  DashProductSegmentedTab,
  DashAdCarouselPagination,
  DashAdCarousel,
} from '@app/screens';
import {useDispatch} from 'react-redux';
import {setCurrentProduct} from '@app/redux/slices/displayProducts/productSlice';

const productCategoryDataItems = [
  {
    id: 1,
    categoryName: 'Bike',
    categoryImage: <ProductCategoryBike width={50} height={45} />,
    isActive: true,
  },
  {
    id: 2,
    categoryName: 'Scooter',
    categoryImage: <ProductCategoryScooter width={50} height={45} />,
    isActive: false,
  },
  {
    id: 3,
    categoryName: 'Car',
    categoryImage: <ProductCategoryCar width={50} height={45} />,
    isActive: false,
  },
  {
    id: 4,
    categoryName: 'Accessories',
    categoryImage: <ProductCategoryAccessories width={50} height={45} />,
    isActive: false,
  },
];

const productCardData = [
  {
    id: 1,
    imageId: 'engineFilter',
    productCardCategory:'engineFilter',
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 2,
    imageId: 'brakePad',
    productCardCategory:'brakePad',
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 3,
    imageId: 'engineFilter',
    productCardCategory:'engineFilter',
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 4,
    imageId: 'brakePad',
    productCardCategory:'brakePad',
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
];

const adData = [
  {
    id: 1,
    adTitle: 'CASTROL MAGNATEC',
    adSubTitle: 'Non-stop Protection From Every Start',
    adImage: <CastrolImage />,
  },
  {
    id: 2,
    adTitle: 'LOREM IPSUM',
    adSubTitle: 'Non-stop Protection From Every Start',
    adImage: <EngineFilterImage />,
  },
  {
    id: 3,
    adTitle: 'FIRE STYLE',
    adSubTitle: 'Non-stop Protection From Every Start',
    adImage: <BrakePadImage />,
  },
];

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [productCategoryData, setProductCategoryData] = useState(
    productCategoryDataItems,
  );

  const onProductCardPress = (
    id,
    imageId,
    productCardCategory,
    productCardTitle,
    productCardSubTitle,
    productCardPrice,
  ) => {
    
    dispatch(
      setCurrentProduct({
        id,
        imageId,
        productCardCategory,
        productCardTitle,
        productCardSubTitle,
        productCardPrice,
      }),
    );
    navigation.navigate('ProductDetails');
  };

  const productCategoryStatusChange = itemId => {
    // productCategoryData.filter(
    //   item =>
    //     item.id === itemId &&
    //     setProductCategoryData((prevState, props) =>
    //       console.log(...prevState.item),
    //     ),
    // );
  };

  const productCategoryRender = ({item}) => (
    <DashProductCategory
      categoryId={item.id}
      categoryName={item.categoryName}
      categoryImage={item.categoryImage}
      isActive={item.isActive}
      statusChangeHandler={productCategoryStatusChange}
      style={Styles.dashboardProductCategoryStyles}
    />
  );

  const renderCarouselItem = ({item}) => (
    <View style={{marginRight: 25}}>
      <DashAdCarousel
        key={item.id}
        adTitle={item.adTitle}
        adSubTitle={item.adSubTitle}
        adImage={item.adImage}
      />
    </View>
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

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.adContainer}>
          <DashAdCarouselPagination
            dataArr={adData}
            renderCarouselItem={renderCarouselItem}
          />
        </View>

        <View style={Styles.productCategoryContainer}>
          <FlatList
            horizontal
            data={productCategoryData}
            renderItem={productCategoryRender}
            keyExtractor={data => data.id}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    width: 14,
                  }}
                />
              );
            }}
          />
        </View>

        <View style={Styles.buttonTabContainer}>
          <DashProductSegmentedTab />
        </View>

        <View style={Styles.productCardContainer}>
          {productCardData.map(item => (
            <ProductCard
              key={item.id}
              productId={item.id}
              productImageId={item.imageId}
              productCardCategory={item.productCardCategory}
              productCardImage={item.productCardImage}
              productCardTitle={item.productCardTitle}
              productCardSubTitle={item.productCardSubTitle}
              productCardPrice={item.productCardPrice}
              onPressHandler={onProductCardPress}
              titleTextFontWeight="600"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
