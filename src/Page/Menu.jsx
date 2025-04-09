import React from 'react';
import { Product } from './Home';
import Footer from '../Components/Footer';

const Menu = () => {
  return (
    <div className='pt-32 w-full bg-white-Color'>
      <div className='text-center my-20'>
        <h1 className='uppercase to-black-Color text-6xl font-extrabold select-none'>
          Menu
        </h1>
      </div>
      <div>
        <Product triggerOnScroll={false} itemLimit={6} />
      </div>
      <div className='text-center font-zodiak text-2xl lg:text-6xl bg-black-Color text-white-Color select-none py-20'>
        <h1>We are diverse blends, expertly crafted.</h1>
        <h1>We are for mindful brewing and for</h1>
        <h1>fueling creativity with every sip.</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
