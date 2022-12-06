import {View, Text} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-paper';
import {Colors} from '@app/constants';

export default function UserSettingToggleButton({isSwitchOn, onToggleSwitch}) {
  return (
    <View>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        style={{
          width: 70,
          transform: [{scaleX: 1.1}, {scaleY: 1.1}],
        }}
        trackColor={{
          true: Colors.textLinkColor,
          false: Colors.toggleButtonOffColor,
        }}
        thumbColor={Colors.whiteColor}
      />
    </View>
  );
}
