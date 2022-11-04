import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import HolaMundo from './src/components/HolaMundo';
import Title from './src/components/Title';
import styles from './src/styles/styles';
import {Button, Input} from '@rneui/themed';
import {getText} from './src/services/getData';

const App = () => {
  const [text, setTexto] = useState('');
  const [fact, setFact] = useState('');

  useEffect(() => {
    getText().then(result => {
      console.log(result, result.fact);
      setFact(result.fact);
    });
  }, []);

  return (
    <View style={styles.main}>
      <Button title="solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="Clear" />

    <Input placeholder='BASIC INPUT' value={text} onChangeText={setTexto} />

      <HolaMundo 
      parametro1={text} 
      propiedad2="red" 
      size={18} 
      value={true}
      />
      <TouchableOpacity>
      <HolaMundo 
      parametro1="adios" 
      propiedad2="blue" 
      size={24} 
      value={true}
      />
      </TouchableOpacity>
      <HolaMundo 
      parametro1={fact} 
      propiedad2="blue" 
      size={28} 
      value={false}
      />
    </View>
  );
};

export default App;