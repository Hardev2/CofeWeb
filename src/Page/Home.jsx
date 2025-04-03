'use client';
import React, { useEffect, useState } from 'react';
import {
  heroSection,
  Coffee,
  StoreData,
  playlistPart1,
  playlistPart2,
  playlistPart3,
} from '../Components/Data/HomeData/';

import video1 from '../../public/Image/mp4.mp4';
import image1 from '../../public/Image/homeImage.jpg';
import centerImg from '../../public/Image/parallax-center.jpg';
import parallaxImg1 from '../../public/Image/parallax-img1.jpg';
import parallaxImg2 from '../../public/Image/parallax-img2.jpg';
import parallaxImg3 from '../../public/Image/parallax-img3.jpg';
import parallaxImg4 from '../../public/Image/parallax-img4.jpg';
import Video2 from '../../public/Image/video2.mp4';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

import { FaMinus, FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Footer from '../Components/Footer';

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
      <Explore />
      <VideoSection />
      <StoreSection />
      <TextSection />
      <Footer />
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
            <h1 className='font-zodiak font-thin text-2xl text-black-Color select-none'>
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
            className='mb-5 mt-5 text-center z-30 select-none'>
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
          className='text-gray-300 font-zodiak font-thin text-xl select-none'>
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
            <h1 className='text-white uppercase font-extrabold text-4xl text-center mt-5 lg:text-6xl lg:w-[550px] z-[5] select-none'>
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
            <h1 className='text-white uppercase font-extrabold text-4xl text-center lg:text-6xl lg:w-[550px] z-10 select-none'>
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
            <h1 className='text-white uppercase font-extrabold text-4xl  text-center lg:text-6xl lg:w-[550px] z-50 select-none'>
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
                  <div className='my-5 lg:w-[390px] select-none'>
                    <h3 className='text-[#decca8] mb-3 uppercase font-extrabold text-lg'>
                      {item.name}
                    </h3>
                    <div className='flex items-center justify-between '>
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
    <div className='w-full h-[70vh] lg:h-[180vh] relative'>
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

const Explore = () => {
  return (
    <div className='h-[60vh] w-full pt-40 px-5 lg:pt-0'>
      <div className='flex items-center justify-center flex-col'>
        <div className='relative '>
          <div className='absolute bg-white-Color top-9 lg:top-[66px] bottom-0 left-0 right-0 h-32 pointer-events-none z-[2]'></div>
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative'>
            <h1 className='uppercase text-4xl lg:text-7xl font-extrabold select-none'>
              Crafting
            </h1>
          </motion.div>
        </div>
        <div className='relative '>
          <div className='absolute bg-white-Color top-9 lg:top-[66px] bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]'></div>
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative z-[3]'>
            <h1 className='uppercase text-4xl lg:text-7xl font-extrabold select-none'>
              Coffee
            </h1>
          </motion.div>
        </div>
        <div className='relative '>
          <div className='absolute bg-white-Color top-9 lg:top-[66px] bottom-0 left-0 right-0 h-32 pointer-events-none z-[10]'></div>
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='relative z-[8]'>
            <h1 className='uppercase text-4xl lg:text-7xl font-extrabold select-none'>
              Innovations
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='mb-5 mt-5 text-center z-30'>
          <p className='text-gray-800 w-full text-xs lg:text-lg lg:w-[600px] select-none'>
            We are for unique aesthetics – where design meets flavor.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='z-40'>
          <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700 uppercase text-sm'>
            LifeSTYLE
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const VideoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  // Move only the video, not the container
  const yTransform = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div
      ref={containerRef}
      className='h-[100vh] w-full overflow-hidden relative'>
      <div className='sticky top-0 left-0 w-full h-screen  flex items-center justify-center overflow-hidden'>
        <motion.video
          src={Video2}
          autoPlay
          muted
          loop
          playsInline
          className=' w-full h-[120vh] object-cover relative top-14 '
          style={{ y: yTransform }}
        />
      </div>
    </div>
  );
};

const StoreSection = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className='pt-20 w-full h-auto  bg-black-Color'>
      <div className='relative'>
        <div className='bg-black-Color absolute  top-9 lg:top-[66px] left-0 right-0 bottom-0 pointer-events-none h-32 z-[5]'></div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='relative flex items-center justify-center z-[2]'>
          <h1 className='text-white uppercase font-extrabold  text-4xl lg:text-7xl  select-none'>
            Byte & Bean
          </h1>
        </motion.div>
      </div>
      <div className='relative'>
        <div className='bg-black-Color absolute top-9 lg:top-[66px] left-0 right-0 bottom-0 pointer-events-none h-32 z-[10]'></div>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='relative flex items-center justify-center  z-[5]'>
          <h1 className='text-white  uppercase font-extrabold text-4xl lg:text-7xl select-none'>
            Coffee
          </h1>
        </motion.div>
      </div>
      <div className='relative'>
        <div className='bg-black-Color absolute top-9 lg:top-[66px]  left-0 right-0 bottom-0 pointer-events-none h-32 z-[15]'></div>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='relative flex items-center justify-center  z-[12]'>
          <h1 className='text-white uppercase font-extrabold text-4xl lg:text-7xl select-none'>
            Store
          </h1>
        </motion.div>
      </div>
      <div className='accordion mt-10 z-20 relative'>
        <div>
          {StoreData && StoreData.length > 0 ? (
            StoreData.map((itemData) => (
              <div
                key={itemData.id}
                onClick={() => handleSingleSelection(itemData.id)}
                className='flex flex-col items-center  py-5 border-t-[1px] border-solid border-white last:border-b-[1px] cursor-pointer group'>
                <div className='flex items-center justify-between w-full text-white px-5 lg:px-10 flex-wrap'>
                  <div className='flex items-center justify-center gap-2 select-none'>
                    <h1 className='text-xl lg:text-5xl font-extrabold uppercase'>
                      {itemData.name}
                    </h1>
                    <p className='font-zodiak lg:text-2xl'>
                      {itemData.location}
                    </p>
                  </div>
                  <div className='text-white  group-hover:text-black group-hover:bg-white transition duration-300 p-1 rounded-full border-[1px] border-solid border-white text-sm font-thin'>
                    <AnimatePresence mode='wait' initial={false}>
                      <motion.div
                        key={selected ? 'minus' : 'plus'} // Unique key triggers re-animation
                        initial={{ rotate: selected ? -90 : 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: selected ? 90 : -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}>
                        {selected ? <FaMinus /> : <FaPlus />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                <AnimatePresence>
                  {selected === itemData.id ? (
                    <motion.div
                      variants={contentVariants}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      className='overflow-hidden w-full '>
                      {itemData.carousel}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className='text-red-500'>No data found!</div>
          )}
        </div>
      </div>
      <div className='relative text-center bg-black-Color pt-14'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='z-40'>
          <button className='border-[1px] border-solid border-white-Color px-8 py-2 hover:bg-white hover:text-black-Color duration-700  text-sm text-white-Color'>
            Our Coffee Stores
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const TextSection = () => {
  return (
    <div className='w-full h-[85vh] lg:h-[135vh] text-center bg-black-Color pt-[200px] select-none'>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false }}
        className='font-zodiak text-3xl font-thin text-white-Color mb-5'>
        Enjoy
      </motion.h1>
      <div className='relative mb-16'>
        <div className='bg-black-Color absolute  top-9 lg:top-16 left-0 right-0 bottom-0 pointer-events-none h-32 z-[5]'></div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='relative flex items-center justify-center z-[2]'>
          <h1 className='text-white uppercase font-extrabold  text-4xl lg:text-7xl  '>
            Playlist
          </h1>
        </motion.div>
      </div>
      <TextLoop songs={playlistPart1} />
      <TextLoop songs={playlistPart2} />
      <TextLoop songs={playlistPart3} />
      <div className='text-center mt-14'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='z-40'>
          <button className='border-[1px] border-solid border-white-Color px-8 py-2 hover:bg-white hover:text-black-Color duration-700  text-[.7rem] text-white-Color uppercase '>
            Byte & Bean Playlist
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const TextLoop = ({ songs = [] }) => {
  return (
    <div className='overflow-hidden relative z-40 mb-4 '>
      <motion.div
        className='whitespace-nowrap text-xl font-bold '
        animate={{
          x: ['0%', '-100%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50, // Adjust speed
              ease: 'linear',
            },
          },
        }}>
        {songs.map((word, index) => (
          <span
            key={index}
            className='mx-4 text-4xl lg:text-7xl text-white font-zodiak italic font-thin select-none'>
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
