

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CategoryItem({item}) {
   return (
      <div className='category-item'>
         <img src={item.strCategoryThumb} alt={item.strCategory} />
         <h4 className='text-center'>{item.strCategory}</h4>
         <p>{item.strCategoryDescription.slice(0,65)}</p>
         <div className='category-item-link text-center'>
            <Link className='bt-scale' to={`/category/${item.strCategory}`}>See all</Link>
         </div>
         <Outlet />
      </div>
   );
}

export default CategoryItem;