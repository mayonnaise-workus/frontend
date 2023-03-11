import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const RadioButton = ({label, checked, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}
      onPress={onPress}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {checked && (
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: 'black',
            }}
          />
        )}
      </View>
      <Text style={{marginLeft: 8}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
