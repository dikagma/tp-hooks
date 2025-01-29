import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext, ThemeContext } from '../App';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const [debouncedTerm, setDebouncedTerm] = useState('');
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const {language} = useContext(LanguageContext)
 
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  useEffect(()=>{
    const handler =setTimeout(()=>{
      setDebouncedTerm(searchTerm)
    },300) // 300ms de délai pour le debounce

    return ()=>{
      clearTimeout(handler); // Nettoyage pour éviter des appels multiples
    }
  },[searchTerm])

  useEffect(()=>{
    if(debouncedTerm){
      console.log('Recherche déclenchée pour :', debouncedTerm);
    }

  },[debouncedTerm])
  

  return (
    <div className="mb-4">

     {/* Champ de recherche */}
      
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={language === 'fr' ? 'Rechercher un produit...' :  'Search for a product...' }
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;