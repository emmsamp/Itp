import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
.
const HolaMundo = ({value, parametro1, propiedad2, size}) => {
  const [fondo, setChangeFondo] = useState('black');

  useEffect(() => {
    // nuestra función se va a ejecutar solo una vez.
    if (value) {
        setChangeFondo('white');
      }
  }, []);  // si no hay nada en los [] se va a ejecutar solo una vez la condición
  
  // let fondo = 'black';               La difencia de usar Hooks es que esta función se ejecuta todo el tiempo
  // if (value) {
  //   fondo = 'white';
  // }

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
