import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text, Image} from 'react-native';
import {Button} from '@rneui/themed';
import styles from '../styles/styles';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img1 from '../assets/img1.jpeg';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.jpg';

import {getText} from '../services/getData';

const arrayImg = [img1, img2, img3, img4, img5, img6];

const Picture = ({navigation}) => {
  const [txt, setTxt] = useState('valor pr dflt');
  const [img, setImg] = useState(img6);

  useEffect(() => {
    updateTxtImg();
  }, []);

  const updateTxtImg = () => {
    getText().then(result => setTxt(result.fact));
    const itemRandom = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    setImg(itemRandom);
  };

  const irA = () => {
    navigation.navigate('AboutScreen');
  };

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Button title="Actualizar" onPress={updateTxtImg} />
      </View>
      <Image
        source={img}
        style={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.txt}> {txt} </Text>

      <Button title="Acerca de" onPress={irA} />
    </View>
  );
};

export default Picture;
