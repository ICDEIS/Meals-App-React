

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <nav className='navbar'>
         <h3 className='nav-brand'> <Link to='/'>EDDESS</Link> </h3>
         <ul className='nav-ul-list'>
            <li> <Link to='contact'>Contact</Link> </li>
            <li> <Link to='about'>About</Link> </li>
         </ul>
      </nav>
   );
}

export default Navbar;