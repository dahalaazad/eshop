import React, {useRef, useState} from 'react';
import {View, ScrollView, FlatList, Animated} from 'react-native';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/dashboard/DashboardStyles';
import ProductCategoryBike from '@app/assets/svg/DashboardCategoryBike.svg';
import ProductCategoryScooter from '@app/assets/svg/DashboardCategoryScooter.svg';
import ProductCategoryCar from '@app/assets/svg/DashboardCategoryCar.svg';
import ProductCategoryAccessories from '@app/assets/svg/DashboardCategoryAccessories.svg';
import EngineFilterImage from '@app/assets/svg/EngineFilter.svg';
import BrakePadImage from '@app/assets/svg/BrakePad.svg';
import DashProductCategory from '@app/screens/dashboard/components/DashProductCategory';
import DashProductSegmentedTab from '@app/screens/dashboard/components/DashProductSegmentedTab';
import DashAdCarouselPagination from './components/DashAdCarouselPagination';
import CastrolImage from '@app/assets/svg/DashboardAdCastrol.svg';
import DashAdCarousel from '@app/screens/dashboard/components/DashAdCarousel';

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
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 2,
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 3,
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 1999,
  },
  {
    id: 4,
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
    adSubTitle: 'Non-stop protection from every start',
    adImage: <CastrolImage />,
  },
  {
    id: 2,
    adTitle: 'LOREM IPSUM',
    adSubTitle: 'Non-stop protection from every threat',
    adImage: <EngineFilterImage />,
  },
  {
    id: 3,
    adTitle: 'FIRE STYLE',
    adSubTitle: 'Non-stop protection from every threat',
    adImage: <BrakePadImage />,
  },
];

export default function Dashboard({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [productCategoryData, setProductCategoryData] = useState(
    productCategoryDataItems,
  );

  const onProductCardPress = itemId => {
    navigation.navigate('ProductDetails', {itemId: itemId,sourcePage:'dashboard'});
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
    <View>
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
