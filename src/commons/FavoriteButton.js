import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import AD from 'react-native-vector-icons/AntDesign';
import { Colors } from '@app/constants';

export default function FavoriteButton() {
  const [iconName, setIconName] = useState('hearto');
  return (
    <View>
      <TouchableOpacity
        style={flattenStyle}
        onPress={() => {
          iconName==='hearto'? setIconName('heart'): setIconName('hearto')
        }}>
        <AD name={iconName} size={25} color={Colors.backButtonBlueColor}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 8,
    padding: 12,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height:13},
    shadowOpacity:0.8,
    shadowRadius: 8,
    elevation:10
  },
});

const flattenStyle = StyleSheet.flatten([
  styles.backButton,
  styles.shadowProp
]);
