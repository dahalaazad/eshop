import {View, Text, FlatList,StyleSheet} from 'react-native';
import React from 'react';
import {productCategoryDataItems} from '@app/constants/productCategoryData';
import DashProductCategory from '@app/screens/dashboard/components/DashProductCategory';
import { Colors } from '@app/constants';

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
  container:{
    backgroundColor:Colors.whiteColor,
    borderWidth:0,
    borderRadius:16,
    width:'100%',
    padding:10,
    elevation:3,
    shadowColor: Colors.checkboxColor,
  },

})

export default ProductHorizontalScroll;
