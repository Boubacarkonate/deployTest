import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Exo1 = () => {
  const [couleur, setCouleur] = useState('green');

  const toggle = () => {
    setCouleur(couleur === 'green' ? 'red' : 'green');
  };

  return (
    <TouchableOpacity onPress={toggle}>
      <View style={{ backgroundColor: couleur }}>
        <Text>clique</Text>
      </View>
    </TouchableOpacity>
  );
  
};

export default Exo1;



