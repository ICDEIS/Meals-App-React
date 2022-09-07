

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function MealsItem({meal}) {
   return (
      <div className='meals-item'>
         <img src={meal.strMealThumb} alt={meal.strMealThumb} />
         <h4>{meal.strMeal}</h4>
         <div className='category-item-link text-center'>
            <Link className='bt-scale' to={`/meal/${meal.idMeal}`}>See recipe</Link>
         </div>
      </div>
   );
}

export default MealsItem;