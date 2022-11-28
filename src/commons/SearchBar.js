import React from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '@app/constants';

export default function SearchBar({labelText, onBlur, onChange, outlineColor}) {
  return (
    <TextInput
      mode="outlined"
      style={{
        paddingLeft: 10,
        width: '80%',
        backgroundColor: Colors.whiteColor,
      }}
      placeholder={labelText}
      outlineColor={outlineColor}
      activeOutlineColor={Colors.textLinkColor}
      onBlur={onBlur}
      onChangeText={onChange}
      selectionColor={Colors.subtitleTextColor}
      left={<TextInput.Icon icon="cloud-search-outline" />}
    />
  );
}
