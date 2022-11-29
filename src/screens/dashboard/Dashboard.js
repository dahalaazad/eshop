import React from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import DashAdCarousel from '@app/screens/dashboard/components/DashAdCarousel';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/dashboard/DashboardStyles';
import CastrolImage from '@app/assets/svg/DashboardAdCastrol.svg';
import ProductCategoryBike from '@app/assets/svg/DashboardCategoryBike.svg';
import ProductCategoryScooter from '@app/assets/svg/DashboardCategoryScooter.svg';
import ProductCategoryCar from '@app/assets/svg/DashboardCategoryCar.svg';
import ProductCategoryAccessories from '@app/assets/svg/DashboardCategoryAccessories.svg';
import EngineFilterImage from '@app/assets/svg/EngineFilter.svg';
import BrakePadImage from '@app/assets/svg/BrakePad.svg';
import DashProductCategory from '@app/screens/dashboard/components/DashProductCategory';

const productCategoryData = [
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
    isActive: true,
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
    productCardPrice: 'Rs 1,999',
  },
  {
    id: 2,
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 'Rs 1,999',
  },
  {
    id: 3,
    productCardImage: <EngineFilterImage />,
    productCardTitle: 'Engine Filter',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 'Rs 1,999',
  },
  {
    id: 4,
    productCardImage: <BrakePadImage />,
    productCardTitle: 'Brake Pad',
    productCardSubTitle: 'Lorem ipsum',
    productCardPrice: 'Rs 1,999',
  },
];

export default function Dashboard({navigation}) {
  const productCategoryRender = ({item}) => (
    <DashProductCategory
      categoryName={item.categoryName}
      categoryImage={item.categoryImage}
      isActive={item.isActive}
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

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.adContainer}>
          <DashAdCarousel
            adTitle="CASTROL MAGNATEC"
            adSubTitle="Non-stop protection from every start"
            adImage={<CastrolImage />}
          />
        </View>

        <View style={Styles.productCategoryContainer}>
          <FlatList
            horizontal
            pagingEnabled={true}
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
          <Text>Popular Product</Text>
        </View>

        <View style={Styles.productCardContainer}>
          {productCardData.map(item => (
            <ProductCard
              key={item.id}
              productCardImage={item.productCardImage}
              productCardTitle={item.productCardTitle}
              productCardSubTitle={item.productCardSubTitle}
              productCardPrice={item.productCardPrice}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
