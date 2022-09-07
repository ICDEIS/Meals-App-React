

import React from 'react';
import { Link } from 'react-router-dom';

function SearchedMeal({item}) {
   return (
      <div className='searched-meal'>
         <div className='meals-item'>
         <img src={item.strMealThumb} alt={item.strMealThumb} />
         <h4>{item.strMeal}</h4>
         <div className='category-item-link text-center'>
            <Link className='bt-scale' to={`/meal/${item.idMeal}`}>See recipe</Link>
         </div>
      </div>
      </div>
   );
}

export default SearchedMeal;