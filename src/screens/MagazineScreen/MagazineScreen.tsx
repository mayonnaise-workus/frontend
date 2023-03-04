import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MagazineScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Magazine!</Text>
    </View>
  );
};

export default MagazineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
