import React from 'react';
import './style.css';

const HeaderResults = ({results}) => {
  
  const resultQuantity = 4;

    return (
      <>
      <div className='results-container'>
        {results.slice(0, resultQuantity).map((product, id) => {
          return (
              <div key={id} className='results-card'>
                <img src={product.image} alt="Imagem do produto" className='results-image' />
                <p className='results-title'>{product.title}</p>
                <p className='results-price'>R${product.price.toFixed(2)}</p>
              </div>
          )
        })}
      </div>
      </>
  );
}

export default HeaderResults;
