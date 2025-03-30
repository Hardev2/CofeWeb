'use client';
import React, { useEffect } from 'react';
import { heroSection } from '../Components/Data/HomeData/';
import { Coffee } from '../Components/Data/HomeData/';
import video1 from '../../public/Image/mp4.mp4';
import image1 from '../../public/Image/homeImage.jpg';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='pt-32 w-full'>
      <Hero />
      <ImageSection />
      <Product />
    </div>
  );
};

const Hero = () => {
  return (
    <div className=' px-8 lg:px-16  relative flex flex-col items-center justify-center w-full'>
      {heroSection.map((item, index) => (
        <div
          className=' relative flex flex-col items-center justify-center w-full'
          key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='mb-5'>
            <h1 className='font-custom font-thin text-2xl text-gray-500 select-none'>
              {item.subHeader}
            </h1>
          </motion.div>
          <div className='relative overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 h-4 bg-white to-transparent pointer-events-none z-10' />
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false }}
              className='mx-12 mb-5 text-center overflow-hidden'>
              <h1 className='font-extrabold uppercase text-zinc-800 text-5xl lg:text-[8rem] select-none lg:leading-[108px] overflow-hidden'>
                {item.header}
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='mb-5 text-center'>
            <p className='text-gray-800 w-full text-xs lg:text-lg lg:w-[600px]'>
              {item.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false }}>
            <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700'>
              {item.button}
            </button>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageSection = () => {
  const containerRef = useRef(null);

  const { scrollY } = useScroll(); // Track full page scroll

  // Apply movement to the images, not the container
  const yTransform = useTransform(scrollY, [0, 1000], ['10%', '-40%']);
  return (
    <div
      ref={containerRef}
      className=' w-full h-[50vh] lg:h-screen px-8 lg:px-16 flex items-center justify-center mt-10 mb-10 lg:mb-20 lg:mt-20'>
      <div className='flex w-full lg:w-[75%] h-full gap-0 overflow-hidden'>
        <div className='w-[50%] h-full'>
          <motion.img
            src={image1}
            alt='image'
            className='w-full h-[50vh] lg:h-full object-cover'
            style={{ y: yTransform }}
          />
        </div>
        <div className='w-[50%] h-full'>
          <motion.video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-[50vh] lg:h-full object-cover'
            style={{ y: yTransform }}
          />
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const productVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: 'afterChildren',
        staggerChildren: 0.2,
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
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className='w-full bg-black-Color'>
      <div className='flex items-center justify-center flex-col px-5 pt-20 lg:pt-44 mb-6 '>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='text-gray-300 font-custom font-thin text-xl'>
          We are multiple ranges,
        </motion.h1>
        <div className='relative'>
          <div className='absolute bottom-0 top-20 left-0 right-0 h-12 bg-black-Color  pointer-events-none z-[2]' />

          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative'>
            <h1 className='text-white uppercase font-extrabold text-5xl text-center mt-5 lg:text-6xl lg:w-[550px] z-[5]'>
              Discover
            </h1>
          </motion.div>
        </div>
        <div className='relative'>
          <div className='absolute bottom-0 top-20 left-0 right-0 h-12 bg-black-Color  pointer-events-none z-30' />

          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative  z-[5]'>
            <h1 className='text-white uppercase font-extrabold text-5xl text-center mt-5 lg:text-6xl lg:w-[550px] z-10'>
              Your New
            </h1>
          </motion.div>
        </div>
        <div className='relative '>
          <div className='absolute bottom-0 top-20 left-0 right-0 h-12 bg-black-Color  pointer-events-none z-40' />
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative z-30'>
            <h1 className='text-white uppercase font-extrabold text-5xl text-center mt-5 lg:text-6xl lg:w-[550px] z-50'>
              Coffee Haven
            </h1>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={productVariant}
        initial='hidden'
        whileInView='visible'
        exit='exit'
        className='w-full px-8 lg:px-16 py-10 h-auto grid gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-3 place-items-start'>
        {Coffee && Coffee.length > 0 ? (
          Coffee.slice(0, 6).map((item) => (
            <AnimatePresence mode='wait' initial={true}>
              <motion.div
                variants={itemVariant}
                className='w-full'
                key={item.id}>
                <>
                  <div
                    className='flex items-center justify-center w-full h-[250px] lg:w-[390px] lg:h-[460px]'
                    style={{
                      background:
                        ' linear-gradient(14deg, rgba(249,244,215,1) 0%, rgba(231,215,184,1) 22%, rgba(158,141,120,1) 47%, rgba(143,131,89,1) 73%, rgba(98,87,56,1) 83%, rgba(104,97,91,1) 92%, rgba(111,105,100,1) 100%)',
                    }}>
                    <div className='relative w-[500px] h-[200px] flex items-center justify-center group'>
                      {/* First Image (Initially Visible, Disappears on Hover) */}
                      <img
                        src={item.hover}
                        alt='Static'
                        className='absolute w-full h-[180px] lg:w-[350px] lg:h-[400px] object-cover rounded-md transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0'
                      />

                      {/* Second Image (Initially Hidden, Appears on Hover) */}
                      <img
                        src={item.image}
                        alt='Hover'
                        className='absolute w-[150px] h-[250px] lg:w-[300px] lg:h-[400px] object-cover rounded-md opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100'
                      />
                    </div>
                  </div>
                  <div className='my-5 lg:w-[390px]'>
                    <h3 className='text-[#decca8] mb-3 uppercase font-extrabold text-lg'>
                      {item.name}
                    </h3>
                    <div className='flex items-center justify-between'>
                      <p className='text-[#decca8] text-sm'>
                        {item.ingredients.join(', ')}
                      </p>
                      <p className='text-[#decca8] text-sm '>${item.price}</p>
                    </div>
                  </div>
                </>
              </motion.div>
            </AnimatePresence>
          ))
        ) : (
          <p className='text-white'>No products available.</p>
        )}
      </motion.div>
    </div>
  );
};
