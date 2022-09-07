

import React from 'react';

function Footer(props) {
   return (
      <footer className='footer'>
         <h3 className='footer-brand'>DEVISS</h3>
         <p className='footer-year'>Copyright {new Date().getFullYear()}</p>
      </footer>   
   );
}

export default Footer;