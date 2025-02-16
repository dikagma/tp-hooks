import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';

const ProductList = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext pour les traductions
  const {language}=useContext(LanguageContext)
  const { 
    products, 
    loading, 
    error,
    page,
    fetchProducts,  // TODO: Exercice 4.1 - Récupérer la fonction de rechargement
   // TODO: Exercice 4.2 - Récupérer les fonctions et états de pagination
    totalPages,
    previousPage, // TODO: Exercice 4.2 - Récupérer les fonctions et états de pagination
    nextPage, // TODO: Exercice 4.2 - Récupérer les fonctions et états de pagination
  } = useProductSearch();

  

  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      Erreur: {error}
    </div>
  );
  
  return (
    <div>
      {/* TODO: Exercice 4.1 - Ajouter le bouton de rechargement */}
       
      <button onClick={fetchProducts} className={`btn btn-primary my-3 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
        {language === 'fr' ? 'Recharger' : 'Reload'}
      </button>


      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              {product.thumbnail && (
                <img 
                  src={product.thumbnail} 
                  className="card-img-top" 
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong> {language==='fr' ? 'Prix : ' : 'Price : '}  </strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* TODO: Exercice 4.2 - Ajouter les contrôles de pagination */}


      {/* Exemple de structure pour la pagination :*/}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              Précédent
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              Page {page} sur {totalPages}
            </span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Suivant
            </button>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default ProductList;