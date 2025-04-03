import React from 'react';
import { StoreData } from '../Components/Data/HomeData';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from './Home';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Store = () => {
  return (
    <div className='w-full pt-32 bg-black-Color'>
      <Header />
      <Stores />
      <div className='text-center py-32'>
        <h1 className='font-zodiak text-2xl lg:text-4xl text-white-Color'>
          We are diverse blends,{' '}
        </h1>
        <div className='relative'>
          <div className='bg-black-Color absolute top-14 left-0 bottom-0 right-0 h-32 pointer-events-none z-[5]'></div>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            className='z-[2]'>
            <h1 className='text-white-Color text-2xl lg:text-6xl font-extrabold select-none uppercase'>
              Expertly Crafted
            </h1>
          </motion.div>
        </div>
      </div>
      <Product triggerOnScroll={false} itemLimit={3} />
      <div className='w-full text-center pb-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='z-40'>
          <Link to='/menu'>
            <button className='border-[1px] border-solid border-white-Color px-8 py-2 hover:bg-white-Color hover:text-black-Color duration-700 uppercase text-sm text-white-Color'>
              Menu
            </button>
          </Link>
        </motion.div>
      </div>
      <div className='bg-white-Color'>
        <Footer />
      </div>
    </div>
  );
};

export default Store;

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='text-center py-16'>
        <div className='relative'>
          <div className='bg-black-Color absolute top-14 left-0 bottom-0 right-0 h-32 pointer-events-none z-[5]'></div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            className='z-[2]'>
            <h1 className='text-white-Color text-3xl lg:text-6xl font-extrabold select-none uppercase'>
              Raw and singular
            </h1>
          </motion.div>
        </div>
        <div className='relative'>
          <div className='bg-black-Color absolute top-14 left-0 bottom-0 right-0 h-32 pointer-events-none z-10'></div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
            className='z-[6] relative'>
            <h1 className='text-white-Color text-3xl lg:text-6xl font-extrabold select-none uppercase'>
              Coffee Shops
            </h1>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
        className='flex items-center justify-center gap-10 pb-10 border-b-[1px] border-solid border-white-Color mb-5 z-[20] relative'>
        {StoreData.map((item) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={item.id}
            id={`section-${item.id}`}
            className='text-white-Color text-[1rem] lg:text-2xl uppercase relative group cursor-pointer'>
            <h1 onClick={() => scrollToSection(`store-${item.id}`)}>
              {item.name}
            </h1>
            <motion.span className='absolute left-0 bottom-0 h-[2px] w-full bg-white-Color origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 '></motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

const Stores = () => {
  const parentVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5,
        when: 'afterChildren',
        staggerDirection: -1,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='w-full h-auto'>
      {StoreData && StoreData.length > 0 ? (
        StoreData.map((store, index) => (
          <div
            key={store.id}
            id={`store-${store.id}`}
            className='px-10 border-b-[1px] border-solid border-white-Color'>
            <div
              className={`relative flex items-center justify-around my-20 gap-5   ${
                index % 2 === 1 ? 'flex-row-reverse ' : 'flex-row'
              }`}>
              <AnimatePresence>
                <motion.div
                  variants={parentVariant}
                  initial='hidden'
                  whileInView='visible'
                  exit='exit'
                  viewport={{ once: true }}
                  className='text-white '>
                  <motion.div variants={itemVariant} className='select-none'>
                    <h1 className=' text-2xl lg:text-4xl font-bold uppercase'>
                      {store.name}
                    </h1>
                    <h1 className='text-lg lg:text-2xl font-zodiak'>
                      {store.location}
                    </h1>
                  </motion.div>
                  <motion.div
                    variants={itemVariant}
                    className='text-white text-[.9rem] lg:text-lg mt-8 select-none'>
                    <h2>{store.days?.weekdays?.day || 'N/A'}</h2>
                    <h2>{store.days?.weekdays?.time || 'N/A'}</h2>
                  </motion.div>
                  <motion.div
                    variants={itemVariant}
                    className='text-white text-[.9rem] lg:text-lg  mt-4 select-none'>
                    <h2>{store.days?.weekend?.day || 'N/A'}</h2>
                    <h2>{store.days?.weekend?.time || 'N/A'}</h2>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              <div className=''>
                <img
                  src={store.storeImg}
                  alt='Image'
                  className='w-[200px] h-[300px] lg:w-[800px] lg:h-[450px] object-cover'
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};
