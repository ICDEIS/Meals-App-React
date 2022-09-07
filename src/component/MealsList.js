

import React from 'react';
import { useNavigate } from 'react-router-dom';
import MealsItem from './MealsItem';

function MealsList({meals}) {
   const goBack = useNavigate()
   return (
      <div className='meals-list'>
         <button onClick={() => goBack(-1)} className='go-back-all-catg'>go back</button>
         {meals.map(meal => (
            <MealsItem meal={meal} key={meal.idMeal} />
         ))}
      </div>
   );
}

export default MealsList;