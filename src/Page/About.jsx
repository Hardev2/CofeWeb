'use client';
import React, { useEffect, useRef } from 'react';
import Aboutbg from '../../public/Image/About-bg.jpg';
import Img from '../../public/Image/parallax-img4.jpg';
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import Footer from '../Components/Footer';

const About = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className='relative w-full'>
      <Description />
      <Footer />
    </motion.div>
  );
};

export default About;

const Description = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  return (
    <div ref={containerRef} className='sticky h-[170vh] lg:h-[200vh] w-full'>
      <motion.img
        src={Aboutbg}
        alt='Bg'
        className='w-full h-full lg:h-[250vh] relative top-10'
        style={{ y: y, filter: 'brightness(50%)' }}
      />

      <div className='pt-32 absolute top-4 px-5 lg:px-32 select-none w-full'>
        <h1 className='text-white font-zodiak text-2xl lg:text-5xl font-medium w-[330px] lg:w-[800px]'>
          At Byte & Bean, we believe that coffee is more than a drink—it’s an
          experience. Our journey began with a simple idea: to merge the warmth
          of a coffeehouse with the convenience of smart technology.
        </h1>
        <h1 className='text-white-Color font-zodiak text-2xl lg:text-5xl font-medium mt-5 w-[330px] lg:w-[800px]'>
          We source the finest coffee beans, use sustainable practices, and
          provide a tech-friendly ambiance where customers can work, connect,
          and relax. From our AI-powered ordering system to our customizable
          drinks, we’re redefining what a modern café should be.
        </h1>
        <div className=' relative right-5 lg:right-32 top-28 float-right'>
          <img
            src={Img}
            alt='Image'
            className='w-[200px] h-[300px] lg:w-[300px] lg:h-[480px]'
          />
          <div className='text-white text-right'>
            <h1 className='text-sm text-gray-300'>Founders</h1>
            <h1 className='font-bold text-lg'>
              Zack <span className='uppercase'>Rosales</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
