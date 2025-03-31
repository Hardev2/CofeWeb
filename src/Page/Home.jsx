'use client';
import React, { useEffect } from 'react';
import { heroSection } from '../Components/Data/HomeData/';
import { Coffee } from '../Components/Data/HomeData/';
import video1 from '../../public/Image/mp4.mp4';
import image1 from '../../public/Image/homeImage.jpg';
import centerImg from '../../public/Image/parallax-center.jpg';
import parallaxImg1 from '../../public/Image/parallax-img1.jpg';
import parallaxImg2 from '../../public/Image/parallax-img2.jpg';
import parallaxImg3 from '../../public/Image/parallax-img3.jpg';
import parallaxImg4 from '../../public/Image/parallax-img4.jpg';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionTemplate,
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
      <ParallaxSection />
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
            <h1 className='font-zodiak font-thin text-2xl text-gray-500 select-none'>
              {item.subHeader}
            </h1>
          </motion.div>
          <div className='relative'>
            <div className='relative w-auto'>
              <div className='absolute bottom-0 top-11 lg:top-28 left-0 right-0 h-32 bg-white-Color pointer-events-none z-[5]'></div>
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: false }}
                className='text-center relative z-[2]'>
                <h1 className='font-extrabold uppercase text-zinc-800 text-5xl lg:text-[8rem] select-none lg:leading-[108px]  '>
                  {item.header.text1}
                </h1>
              </motion.div>
            </div>
            <div className='relative w-auto'>
              <div className='absolute bottom-0 top-11 lg:top-28 left-0 right-0 h-32 bg-white-Color pointer-events-none z-10'></div>
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: false }}
                className='  relative text-center  z-[5]'>
                <h1 className='font-extrabold uppercase text-zinc-800 text-5xl lg:text-[8rem] select-none lg:leading-[108px]  '>
                  {item.header.text2}
                </h1>
              </motion.div>
            </div>
            <div className='relative  w-auto'>
              <div className='absolute bottom-0 top-11 lg:top-28 left-0 right-0 h-32 bg-white-Color pointer-events-none z-20'></div>
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: false }}
                className=' relative text-center z-[10] '>
                <h1 className='font-extrabold uppercase text-zinc-800 text-5xl lg:text-[8rem] select-none lg:leading-[108px]  '>
                  {item.header.text3}
                </h1>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='mb-5 mt-5 text-center z-30'>
            <p className='text-gray-800 w-full text-xs lg:text-lg lg:w-[600px]'>
              {item.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='z-40'>
            <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700 '>
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
      className=' w-full h-[50vh] lg:h-screen px-8 lg:px-16 flex items-center justify-center mt-10 mb-10 lg:mb-20 lg:mt-20 relative'>
      <div className=' flex w-full lg:w-[75%] h-full gap-0 overflow-hidden'>
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
          className='text-gray-300 font-zodiak font-thin text-xl'>
          We are multiple ranges,
        </motion.h1>
        <div className='relative'>
          <div className='absolute bottom-0 top-16 lg:top-20 left-0 right-0 h-32 bg-black-Color  pointer-events-none z-[2]' />

          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative'>
            <h1 className='text-white uppercase font-extrabold text-4xl text-center mt-5 lg:text-6xl lg:w-[550px] z-[5]'>
              Discover
            </h1>
          </motion.div>
        </div>
        <div className='relative'>
          <div className='absolute bottom-0 top-10 lg:top-20 left-0 right-0 h-32 bg-black-Color  pointer-events-none z-30' />

          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative  z-[5]'>
            <h1 className='text-white uppercase font-extrabold text-4xl text-center lg:text-6xl lg:w-[550px] z-10'>
              Your New
            </h1>
          </motion.div>
        </div>
        <div className='relative '>
          <div className='absolute bottom-0 top-10 lg:top-20 left-0 right-0 h-32 bg-black-Color  pointer-events-none z-40' />
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative z-30'>
            <h1 className='text-white uppercase font-extrabold text-4xl  text-center lg:text-6xl lg:w-[550px] z-50'>
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
        className='w-full px-8 lg:px-16 py-10 h-auto grid gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-3 place-items-start relative z-40'>
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

const ParallaxSection = () => {
  return (
    <div className='w-full h-[70vh] lg:h-[200vh] relative'>
      <div className='absolute top-[300px] lg:top-[550px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img
          src={centerImg}
          alt='Parallax-center'
          className='h-[300px] lg:w-[500px] lg:h-[800px] object-cover'
        />
      </div>
      <div className='absolute flex items-start lg:items-center justify-around lg:h-[130vh] mt-11  overflow-hidden w-[100%]'>
        <div className='flex justify-around flex-col h-full'>
          <ParallaxImg
            src={parallaxImg1}
            alt='Image'
            className=' w-[100px] lg:w-[250px] ml-10 mt-20 lg:mt-32 lg:mr-32'
            start={100}
            end={-100}
          />
          <ParallaxImg
            src={parallaxImg2}
            alt='Image'
            className='w-[100px] mt-20 lg:w-[250px] lg:h-[200px] ml-10 lg:ml-20'
            start={100}
            end={-150}
          />
        </div>
        <div className='flex justify-between flex-col h-full'>
          <ParallaxImg2
            src={parallaxImg3}
            alt='Image'
            className='w-[100px] h-[130px] lg:w-[250px] lg:h-[300px] mt-20 lg:mt-32 ml-14 lg:ml-32 '
            start={100}
            end={-100}
          />
          <ParallaxImg2
            src={parallaxImg4}
            alt='Image'
            className='w-[100px] lg:w-[200px] mt-32 ml-20 lg:mr-32'
            start={200}
            end={-250}
          />
        </div>
      </div>
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  // Move the image upward as the user scrolls
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ x }}
    />
  );
};

const ParallaxImg2 = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  // Move the image upward as the user scrolls
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ x }}
    />
  );
};
