

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MealDetails({ meal }) {
   const goBack = useNavigate()
   const [less, setLess] = useState(true)
   function toggleLess() {
      setLess(!less)
   }
   return (
      <>
         <div className='meal-details' key={meal.idMeal}>
         <button onClick={() => goBack(-1)} className='go-back-all-catg'>go back</button>
            <div className='meal-img'>
               <img src={meal.strMealThumb} alt={meal.strMeal} /> <br />
               {meal.strYoutube ? <a className='youtube-link' target="_blank" href={meal.strYoutube} >See on YouTube</a> : null}
            </div>
            <div className='meal-recipe'>
               <h5>Category: {meal.strCategory}</h5>
               <h5>Nation: {meal.strArea}</h5>
               <hr />
               <p className='meal-desc'>{meal.strInstructions}</p>
               <button onClick={toggleLess} className='green-bt mb-3'>See details</button>
               {!less && <ul className='ingredients-list'>
                  {Object.keys(meal).map(item => {
                     if (item.includes('Ingredient') && meal[item]) {
                        return (
                           <li key={item}>{meal[item]} <span>{meal[`strMeasure${item.slice(13)}`]}</span></li>
                        )
                     }
                  })}
                  {/* <li>{meal.strIngredient1} <span>{meal.strMeasure1}</span></li>
                     <li>{meal.strIngredient2} <span>{meal.strMeasure2}</span></li>
                     <li>{meal.strIngredient3} <span>{meal.strMeasure3}</span></li>
                     <li>{meal.strIngredient4} <span>{meal.strMeasure4}</span></li>
                     <li>{meal.strIngredient5} <span>{meal.strMeasure5}</span></li>
                     <li>{meal.strIngredient6} <span>{meal.strMeasure6}</span></li>
                     <li>{meal.strIngredient7} <span>{meal.strMeasure7}</span></li>
                     {meal.strIngredient8 ? <li>{meal.strIngredient8} <span>{meal.strMeasure8}</span></li> : null}
                     {meal.strIngredient9 ? <li>{meal.strIngredient9} <span>{meal.strMeasure9}</span></li> : null}
                     {meal.strIngredient10 ? <li>{meal.strIngredient10} <span>{meal.strMeasure10}</span></li> : null}
                     {meal.strIngredient11 ? <li>{meal.strIngredient11} <span>{meal.strMeasure11}</span></li> : null}
                     {meal.strIngredient12 ? <li>{meal.strIngredient12} <span>{meal.strMeasure12}</span></li> : null}
                     {meal.strIngredient13 ? <li>{meal.strIngredient13} <span>{meal.strMeasure13}</span></li> : null}
                     {meal.strIngredient14 ? <li>{meal.strIngredient14} <span>{meal.strMeasure14}</span></li> : null}
                     {meal.strIngredient15 ? <li>{meal.strIngredient15} <span>{meal.strMeasure15}</span></li> : null}
                     {meal.strIngredient16 ? <li>{meal.strIngredient16} <span>{meal.strMeasure16}</span></li> : null}
                     {meal.strIngredient17 ? <li>{meal.strIngredient17} <span>{meal.strMeasure17}</span></li> : null}
                     {meal.strIngredient18 ? <li>{meal.strIngredient18} <span>{meal.strMeasure18}</span></li> : null}
                     {meal.strIngredient19 ? <li>{meal.strIngredient19} <span>{meal.strMeasure19}</span></li> : null}
                  {meal.strIngredient20 ? <li>{meal.strIngredient20} <span>{meal.strMeasure20}</span></li> : null} */}
                  {/* {meal.strYoutube
                        ? (
                           <div>
                           <h6>Video Detail</h6>
                           <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}
                           frameBorder="0" allowFullScreen></iframe>
                           </div>
                        ) : null} */}
               </ul>
               }
            </div>
         </div>
      </>
   );
}

export default MealDetails;