import React, {useEffect, useRef, useState} from 'react';
import {View, ScrollView, FlatList, Animated, BackHandler} from 'react-native';
import {FilterButton, ProductCard, SearchBar} from '@app/commons';
import {Colors} from '@app/constants';
import {Styles} from '@app/screens/dashboard/DashboardStyles';
import {
  DashProductCategory,
  DashProductSegmentedTab,
  DashAdCarouselPagination,
  DashAdCarousel,
} from '@app/screens';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProductList,
  setCurrentProduct,
} from '@app/redux/slices/displayProducts/productSlice';
import {productCategoryDataItems} from '@app/constants/productCategoryData';
import {adData} from '@app/constants';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();

  const productList = useSelector(state => state?.product?.productList);

  const [productCategoryData, setProductCategoryData] = useState(
    productCategoryDataItems,
  );

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    dispatch(getProductList())
      .unwrap()
      .then(originalPromiseResult => originalPromiseResult)
      .catch(rejectedValueOrSerializedError => {
        console.log(rejectedValueOrSerializedError);
      });
  }, [dispatch]);

  const onProductCardPress = item => {
    dispatch(setCurrentProduct(item));
    navigation.navigate('ProductDetails');
  };

  const productCategoryStatusChange = itemId => {
    setProductCategoryData(
      productCategoryData.map(item =>
        item.id === itemId
          ? {...item, isActive: !item.isActive}
          : {...item, isActive: false},
      ),
    );
  };

  const productCategoryRender = ({item}) => (
    <DashProductCategory
      categoryId={item.id}
      categoryName={item.categoryName}
      categoryImage={item.categoryImage}
      isActive={item.isActive}
      statusChangeHandler={() => {
        productCategoryStatusChange(item.id);
      }}
      // style={Styles.dashboardProductCategoryStyles}
    />
  );

  const renderCarouselItem = ({item}) => (
    <View style={{marginRight: 5}}>
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
          {Array.isArray(productList) && productList.length
            ? productList.map(item => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onPressHandler={onProductCardPress}
                  titleTextFontWeight="600"
                />
              ))
            : null}
        </View>
      </ScrollView>
    </View>
  );
}
