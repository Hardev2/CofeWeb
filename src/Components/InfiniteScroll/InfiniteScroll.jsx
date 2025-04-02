import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScroll = ({ images }) => {
  return (
    <div className='overflow-hidden w-full bg-zinc-700 mt-5 py-10'>
      <motion.div
        className='flex space-x-8'
        animate={{
          x: ['0%', '-100%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 100, // Adjust speed
              ease: 'linear',
            },
          },
        }}>
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className='w-[300px] h-[400px] object-cover '
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
