import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Image} from '@rneui/themed';
import styles from './src/styles/styles';
import graf from './src/assets/graf.jpg'

const App = () => {
  return (
    <View style={styles.main}>
      <Image
        source={graf}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
  </View>
  );
};

export default App;