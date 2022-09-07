

import React from 'react';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Section from './layout/Section';
import './pages/pages.scss'

function Main(props) {
   return (
      <div className='main'>
         <Navbar />
         <Section />
         <Footer />
      </div>
   );
}

export default Main;