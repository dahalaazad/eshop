import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from '@app/screens/dashboard/components/DashProductCategoryStyles';

export default function DashProductCategory({
  categoryName,
  categoryImage,
  isActive,
}) {
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.4}
        style={isActive ? Styles.activeImageContainer : Styles.imageContainer}>
        {categoryImage}
      </TouchableOpacity>
      <View style={Styles.categoryTextContainer}>
        <Text
          style={isActive ? Styles.activeCategoryText : Styles.categoryText}>
          {categoryName}
        </Text>
      </View>
    </View>
  );
}
