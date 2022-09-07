

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MealDetails from '../component/MealDetails';
import { getMealbyId } from '../config/api';
import Loadere from '../ui/Loader/Loadere';

function Recipe(props) {
   const [meal, setMeal] = useState([])
   const {id} = useParams()
   

   useEffect(() => {
      console.log('Subhanalloh');
      getMealbyId(id)
         .then(result => {
            setMeal(result.meals[0])
         })
   },[id])

   return (
      <div className='recipe'>
         {meal
            ? <MealDetails meal={meal} />
            : <Loadere />
         }
      </div>
   );
}

export default Recipe;