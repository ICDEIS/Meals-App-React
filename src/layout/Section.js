

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Category from '../pages/Category';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import WrongRoute from '../pages/WrongRoute';

function Section(props) {
   return (
      <div className='section'>
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/meal/:id' element={<Recipe />} />
            <Route path='*' element={<WrongRoute />} />
         </Routes>
      </div>
   );
}

export default Section;