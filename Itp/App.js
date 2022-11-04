import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Image, Button} from '@rneui/themed';
import styles from './src/styles/styles';
import img1 from './src/assets/img1.jpg'

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.left}>
      <Button title="Actualizar" />
      </View>
      <Image
        source={img1}
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