

import { createBrowserHistory } from 'history';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CategoryList from '../component/CategoryList';
import SearchMeal from '../component/SearchMeal';
import { getAllCategories, getSearchMeal } from '../config/api';
import Loadere from '../ui/Loader/Loadere';

function Home(props) {
   const [catalog, setCatalog] = useState([])
   const [searched, setSearched] = useState([])
   const {pathname, search} = useLocation()
   const {push} = createBrowserHistory()

   useEffect(() => {
      console.log('Subhanalloh');
      getAllCategories().then(result => {
         const filtered = result.categories.filter(item => item.strCategory !== 'Pork')
         setCatalog(filtered)
         push({
            pathname,
            search: ''
         })
      })
   }, [])
   const searchMealName = (name) => {
      console.log('Subhanalloh');
      getSearchMeal(name)
         .then(result => {
            setSearched(result.meals)
         })
      push({
         pathname,
         search: `?s=${name}`,
      })
   }

   return (
      <div className='home'>
         <SearchMeal searchMealName={searchMealName} />
         {catalog.length
            ? <CategoryList catalog={catalog} searched={searched} />
            : <Loadere />
         }
      </div>
   );
}

export default Home;