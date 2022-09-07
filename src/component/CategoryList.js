

import React from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import SearchedMeal from './SearchedMeal';

function CategoryList({catalog = [], searched = []}) {
   const backHome = () => {
      searched.length = false
   }
   if(!searched) {
         return (
            <div className='text-center mt-5 pt-5'>
               <h3 className='pb-3'>Nothing found</h3>
               <Link onClick={backHome} className='back-home' to='/'>back Home</Link>
            </div>
         )
      }
   return (
      <div className='category-list'>
         {searched.length
            ? searched.map(item => <SearchedMeal key={item.idMeal} item={item} />)
            : catalog.map(item => <CategoryItem key={item.idCategory} item={item} />)
         }
      </div>
   );
}

export default CategoryList;