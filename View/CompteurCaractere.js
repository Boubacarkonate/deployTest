import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useCompteurCaractereViewModel } from '../ViewModel/CompteurCaractereViewModel';

const CompteurCaractere = () => {
  const { text, handleTextChange, getCharacterCount } = useCompteurCaractereViewModel();

   // Appel de la fonction getCharacterCount pour obtenir le nombre de caractères
   const characterCount = getCharacterCount();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Saisir le texte..."
        onChangeText={handleTextChange}
        value={text}
        multiline={true}
      />
      <Text style={styles.characterCountText}>
        Nombre de caractères: {characterCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  characterCountText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CompteurCaractere;