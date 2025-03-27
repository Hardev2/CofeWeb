import React from 'react';

export const Home = () => {
  return (
    <div className='pt-32 px-8 lg:px-16 w-full'>
      <Hero />
    </div>
  );
};

const Hero = () => {
  return (
    <div className=' relative flex flex-col items-center justify-center w-full'>
      <div className='mb-5'>
        <h1 className='font-custom font-thin text-2xl text-gray-500 select-none'>
          We are byte & bean
        </h1>
      </div>
      <div className='mx-12 mb-5 text-center'>
        <h1 className='font-extrabold uppercase text-zinc-800 text-6xl lg:text-[8rem] select-none lg:leading-[108px]'>
          Your Daily Brew, Reimagined.
        </h1>
      </div>
      <div className='mb-5 text-center'>
        <p className='text-gray-800 w-full lg:w-[600px] font-bold'>
          At Byte & Bean, we redefine your coffee experience by merging
          artisanal brews with innovative technology. Join us for a perfect
          blend of flavor and convenience, designed for the modern coffee lover.
        </p>
      </div>
      <div>
        <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700'>
          About Us
        </button>
      </div>
    </div>
  );
};
