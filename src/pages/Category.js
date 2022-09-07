

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MealsList from '../component/MealsList';
import { getfilteredMealbyCatgs } from '../config/api';
import Loadere from '../ui/Loader/Loadere';

function Category(props) {
   const [meals, setMeals] = useState([])
   const {name} = useParams()

   useEffect(() => {
      console.log('Subhanalloh');
      getfilteredMealbyCatgs(name)
         .then(result => {
            setMeals(result.meals)
         })
   },[name])

   return (
      <div className='category'>
         {meals
            ? <MealsList meals={meals} />
            : <Loadere />
         }
      </div>
   );
}

export default Category