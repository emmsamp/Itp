import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Image, Button} from '@rneui/themed';
import styles from './src/styles/styles';
import img1 from './src/assets/img1.jpeg';
import img2 from './src/assets/img2.jpeg';
import img3 from './src/assets/img3.jpeg';
import img4 from './src/assets/img4.jpeg';
import {getText} from './src/services/getData';

const arrayImg = [img1, img2, img3, img4];

const App = () => {
  const [txt, setTxt] = useState ('valor pr dflt');

  useEffect(() => {
    updateTxt();
  }, []);

  const updateTxt = () => getText().then(result => setTxt(result.fact));

  const getImg = () => arrayImg[Math.floor(Math.random() * arrayImg.length)];

  return (
    <View style={styles.main}>
      <View style={styles.left}>
      <Button 
      title="Actualizar" onPress={updateTxt} />
      </View>
      <Image
        source={getImg}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style = {styles.txt}> 
      {txt}
      </Text>
  </View>
  );
};

export default App;