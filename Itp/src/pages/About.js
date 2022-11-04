import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import styles from '../styles/styles';

const About = ({navigation}) => {

  const irA = () => {
    navigation.navigate('PictureScreen');
  };

  return (
    <View style={styles.main}>
      <Text style={styles.txt}> Acerca de </Text>
      <Button title="Picture" onPress={irA} />

    </View>
  );
};

export default About;