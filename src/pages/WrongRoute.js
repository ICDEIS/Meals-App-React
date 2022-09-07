

import React from 'react';
import { Link } from 'react-router-dom';

function WrongRoute(props) {
   return (
      <div className='wrong-route'>
         <h1 className=''>Page Not Found <strong>404 Error</strong> </h1>
         <Link className='back-home' to='/'>back Home</Link>
      </div>
   );
}

export default WrongRoute;