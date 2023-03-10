import React, {useState} from 'react';
import {View} from 'react-native';
import RadioButton from './RadioButton';

const RadioGroup = ({options, selectedValue, onChange}) => {
  const [value, setValue] = useState(selectedValue);

  const handlePress = option => {
    setValue(option);
    onChange(option);
  };

  return (
    <View>
      {options.map(option => (
        <RadioButton
          key={option.id}
          label={option.text}
          checked={option.text === value}
          onPress={() => handlePress(option.text)}
        />
      ))}
    </View>
  );
};

export default RadioGroup;
