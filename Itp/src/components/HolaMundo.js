import React from 'react';
import {Text} from 'react-native';

const HolaMundo = ({value, parametro1, propiedad2, size}) => {
  let fondo = 'black';
  if (value) {
    fondo = 'white';
  }

  return (
    <Text
      style={{
        color: propiedad2,
        fontSize: size,
        backgroundColor: fondo,
      }}>
      {parametro1}
    </Text>
  );
};

export default HolaMundo;
