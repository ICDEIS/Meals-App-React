

import React from 'react';
import { useState } from 'react';

function SearchMeal({searchMealName}) {
   const [word, setWord] = useState('')
   
   const inputSubmit = (ee) => {
      if(ee.key === 'Enter') {
         searchMealName(word)
      }
   }
   function submitValue() {
      searchMealName(word)
   }

   return (
      <div className='search-meal'>
         <input type="text" placeholder='search meal'
            onChange={ee => setWord(ee.target.value)}
            value={word} onKeyDown={inputSubmit}/>
         <button type='button' onClick={submitValue}>Search</button> 
      </div>
   );
}

export default SearchMeal;