import { useState } from 'react';

export const useCompteurCaractereViewModel = () => {

  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const getCharacterCount = () => {
    return text.length;
  };


  return {
    text,
    handleTextChange,
    getCharacterCount,
  };
  
};