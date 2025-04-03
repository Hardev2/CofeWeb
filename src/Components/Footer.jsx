import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='w-full h-[105vh] pt-20'>
      <div className='flex items-center justify-center flex-col'>
        <div className='text-center text-lg font-medium lg:text-2xl select-none px-10'>
          <h1>Enter the Coffee and Protect Ya Neck</h1>
          <h1>We don't serve Gin and Juice but we have C.R.E.A.M</h1>
          <h1>and It Ain't Hard to Tell that there is a N.Y. State Of Mind.</h1>
        </div>
        <div className='flex items-stretch justify-center flex-wrap my-10 px-10 w-full '>
          <div className='border-[1px] text-center lg:text-left border-solid border-black p-10 w-[400px] select-none'>
            <h3 className='uppercase font-medium text-[.6rem]'>newsletter</h3>
            <h1 className='italic font-zodiak text-3xl'>Stay in touch</h1>
            <div className=' flex items-center text-left justify-center lg:justify-start  border-b-[1px] border-solid border-black mt-5 w-[190px] lg:w-[230px]'>
              <input
                type='text'
                placeholder='Enter email address'
                className='outline-none'
              />
              <p className='font-zodiak font-bold text-sm'>GO</p>
            </div>
          </div>
          <div className='text-center border-[1px] border-solid border-black p-10 w-[400px] select-none'>
            <h3 className='uppercase font-medium text-[.6rem]'>JOB</h3>
            <h1 className='italic font-zodiak text-3xl'>Want to join us?</h1>
            <div className='text-center mt-5'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: false }}
                className='z-40'>
                <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700  text-[.7rem] text-black-Color uppercase '>
                  learn more
                </button>
              </motion.div>
            </div>
          </div>
          <div className='text-center border-[1px] border-solid border-black p-10 w-[400px] select-none'>
            <h3 className='uppercase font-medium text-[.6rem]'>
              Take your time
            </h3>
            <h1 className='italic font-zodiak text-3xl'>Stay in touch</h1>
            <div className='text-center mt-5'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: false }}
                className='z-40'>
                <button className='border-[1px] border-solid border-black-Color px-8 py-2 hover:bg-black-Color hover:text-white-Color duration-700  text-[.7rem] text-black-Color uppercase '>
                  Byte & Bean playlist
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full mt-10'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 lg:justify-between flex-wrap   w-[87%] text-center  border-b-[1px] border-solid border-black-Color pb-14'>
            <div className='select-none'>
              <h1 className='text-[.6rem] font-bold uppercase lg:text-left'>
                Coffee, Pastries,
                <br /> Fresh juices
              </h1>
            </div>
            <div className='select-none'>
              <h1 className='font-bold text-5xl lg:text-7xl font-zodiak text-center'>
                byte & bean
              </h1>
            </div>
            <div className='select-none'>
              <h1 className='text-[.6rem] font-bold lg:text-right uppercase'>
                speciality Coffee <br /> Open 24/7
              </h1>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between w-full lg:px-[90px] p-10'>
          <div className='flex items-center justify-around flex-col lg:flex-row gap-8 text-[.7rem] font-bold select-none'>
            <p>Cookies</p>
            <p>Terms & Conditions</p>
            <p>Policy</p>
          </div>
          <div className='text-[.7rem] font-bold select-none'>
            <p>@ 2025 BB Coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
