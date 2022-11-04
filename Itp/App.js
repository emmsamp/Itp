import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HolaMundo from './src/components/HolaMundo';
import Title from './src/components/Title';
import styles from './src/styles/styles';

const App = () => {
  return (
    <View style={styles.main}>
      <HolaMundo 
      parametro1="hola" 
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
      parametro1="que tal!" 
      propiedad2="blue" 
      size={28} 
      value={false}
      />
    </View>
  );
};

export default App;