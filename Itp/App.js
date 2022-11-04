import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Image, Button} from '@rneui/themed';
import styles from './src/styles/styles';
import graf from './src/assets/graf.jpg'

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.left}>
      <Button title="Actualizar" />
      </View>
      <Image
        source={graf}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style = {styles.txt}> 
        kdhjdhjjk ihigiuhiou 
      </Text>
  </View>
  );
};

export default App;