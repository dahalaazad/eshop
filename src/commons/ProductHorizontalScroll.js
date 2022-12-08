import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {productCategoryDataItems} from '@app/constants/productCategoryData';
import DashProductCategory from '@app/screens/dashboard/components/DashProductCategory';
import {Colors} from '@app/constants';

const ProductHorizontalScroll = () => {
  const productCategoryRender = ({item}) => (
    <DashProductCategory
      categoryId={item.id}
      categoryName={item.categoryName}
      categoryImage={item.categoryImage}
      isActive={item.isActive}
      style={styles.container}
      // statusChangeHandler={productCategoryStatusChange}
    />
  );

  return (
    <View>
      <FlatList
        horizontal
        data={productCategoryDataItems}
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    borderTopWidth: 0.1,
    borderRadius: 16,
    padding: 15,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default ProductHorizontalScroll;
